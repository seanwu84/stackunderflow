import { renderTemplate } from "/js/utils.js";

const fetchQuestionComments = async () => {
 const question = document.querySelector(".question");
  const questionId = question.dataset.questionId;

  const res = await fetch(`/api/questions/${questionId}/comments`);
  const comments = await res.json();

  const commentsHtml = await renderTemplate("/templates/comments.hb", {
    comments: comments.questionComments,
  });

  document.querySelector(".question .comments").innerHTML = commentsHtml;
}

fetchQuestionComments()