const express = require("express");
const {Question, Answer, sequelize} = require("../../db/models");
const {Op} = require("sequelize")
const {asyncHandler} = require("../../utils/utils");
const router = express.Router();

router.post("/:sortType/:page", asyncHandler( async(req, res, next) =>{
    let {sortType, page} = req.params;
    page--;
    const {searchTerm} = req.body;
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
                    [Op.like]: `%${searchTerm}%`
                },
                content: {
                    [Op.like]: `%${searchTerm}%`
                }
            }
            
        },
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
                [Op.like]: `%${searchTerm}%`
            }
        },
        order: [
            [sequelize.literal('score'), 'DESC']
          ],
    });
    const results = questions.concat(answers)

    res.json(results)

}));


module.exports = router;





