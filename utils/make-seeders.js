const fs = require('fs');

// Make Question Votes
const numUsers = 100;
const numQuestions = 50;
const numAnswers = 200;
const votesPerUser = 10;

let data = "";
for (let userId = 1; userId <= numUsers; userId++) {
  const questions = [];
  for (let j = 0; j < votesPerUser; j++) {
    const questionId = Math.ceil(Math.random() * numQuestions);
    if (questions.includes(questionId)) continue;
    questions.push(questionId);
    const value = Math.random() <= 0.15 ? -1 : 1;
    data += `{ userId: ${userId}, value: ${value}, createdAt: new Date(), updatedAt: new Date(), questionId: ${questionId} },
`;
  }
}
fs.writeFile('question-votes.txt', data, function (err) {
  if (err) return console.log(err);
  console.log('question-votes.txt successfully written');
});

data = "";
for (let userId = 1; userId <= numUsers; userId++) {
  const answers = [];
  for (let j = 0; j < votesPerUser; j++) {
    const answerId = Math.ceil(Math.random() * numAnswers);
    if (answers.includes(answerId)) continue;
    answers.push(answerId);
    const value = Math.random() <= 0.15 ? -1 : 1;
    data += `{ userId: ${userId}, value: ${value}, createdAt: new Date(), updatedAt: new Date(), answerId: ${answerId} },
`;
  }
}
fs.writeFile('answer-votes.txt', data, function (err) {
  if (err) return console.log(err);
  console.log('answer-votes.txt successfully written');
});