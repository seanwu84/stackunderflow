const express = require("express");
const {Question, Answer, sequelize, User} = require("../../db/models");
const {Op} = require("sequelize")
const {asyncHandler} = require("../../utils/utils");
const router = express.Router();

router.post("/:sortType/:page", asyncHandler( async(req, res, next) =>{
    let {sortType, page} = req.params;
    page--;
    const {query} = req.body;
    console.log(query)
    const questions = await Question.findAll({
        attributes: {
            include:[[
                sequelize.literal(`(SELECT COALESCE(SUM(qv.value), 0)
                                    FROM "QuestionVotes" AS qv
                                    WHERE qv."questionId" = "Question".id)`
                ), "score"
            ]]       
        },
        where: {
            [Op.or]: {
                title: {
                    [Op.iLike]: `%${query}%`
                },
                content: {
                    [Op.iLike]: `%${query}%`
                }
            }
            
        },
        include: [User, Answer],
        order: [
            [sequelize.literal('score'), 'DESC']
          ],
    });
    const answers = await Answer.findAll({
        attributes: {
            include:[[
                sequelize.literal(`(SELECT COALESCE(SUM(av.value), 0)
                                    FROM "AnswerVotes" AS av
                                    WHERE av."answerId" = "Answer".id)`
                ), "score"
            ]]       
        },
        where: {
            content: {
                [Op.iLike]: `%${query}%`
            }
        },
        include: [Question, User],
        order: [
            [sequelize.literal('score'), 'DESC']
          ],
    });
    questions.forEach(function(el){
        el.User.hashedPassword = null;
    });
    answers.forEach(function(el){
        el.User.hashedPassword = null;
    });
    let results = questions.concat(answers)
    if((questions.length > 0) && (answers.length > 0)){
        results = [];
        let index1 = 0;
        let index2 = 0;
        for(let i =0; i < questions.length + answers.length; i++){
            if((index1 + 1) === questions.length){
                results.push(answers[index2]);
                index2++;
                continue;
            } else if((index2 + 1) === answers.length){
                results.push(questions[index1]);
                index1++;
                continue;
            } else if(questions[index1].dataValues.score >= answers[index2].dataValues.score){
                results.push(questions[index1]);
                index1++
                continue;
            } else if(questions[index1].dataValues.score < answers[index2].dataValues.score){
                results.push(answers[index2]);
                index2++
                continue;
            }
        }
    }
    res.json(results)

}));

router.post("/homePage", asyncHandler( async(req, res, next) =>{
    const {query} = req.body;
    console.log(query)
    const questions = await Question.findAll({
        limit: 100,
        attributes: {
            include:[[
                sequelize.literal(`(SELECT COALESCE(SUM(qv.value), 0)
                                    FROM "QuestionVotes" AS qv
                                    WHERE qv."questionId" = "Question".id)`
                ), "score"
            ]]       
        },
        include: [User, Answer],
        order: [
            [sequelize.literal('score'), 'DESC']
          ],
    });
    res.json(questions)
}));


module.exports = router;





