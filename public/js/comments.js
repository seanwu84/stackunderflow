import { renderTemplate, handleErrors } from "/js/utils.js";

const fetchQuestionComments = async () => {
  const question = document.querySelector(".question");
  const questionId = question.dataset.questionId;

  const res = await fetch(`/api/questions/${questionId}/comments`);
  const comments = await res.json();

  const commentsHtml = await renderTemplate("/templates/comments.hb", {
    comments: comments
  });

  document.querySelector(".question__comments").innerHTML = commentsHtml;
};

const addQuestionComment = () => {
  const addQuestionCommentForm = document.querySelector(".add-question-comment-form");
  addQuestionCommentForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(addQuestionCommentForm);
    const content = formData.get("content");
    const question = document.querySelector(".question");
    const questionId = question.dataset.questionId;

    try {
      const res = await fetch(`/api/questions/${questionId}/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      if (!res.ok) {
        throw res;
      }
      addQuestionCommentForm.reset();

      await fetchQuestionComments(); 
    } catch (e) {
      handleErrors(e, '.question__errors-container'); //TODO
    }
  });
};

const fetchAnswerComments = async () => {
  const question = document.querySelector(".question");
  const questionId = question.dataset.questionId;
  const answers = document.querySelectorAll(".answer__comments");
  answers.forEach(async (answer) => {
    const answerId = answer.dataset.answerId;
    const res = await fetch(
      `/api/questions/${questionId}/answers/${answerId}/comments`
    );
    const comments = await res.json();
    const commentsHtml = await renderTemplate("/templates/comments.hb", {
      comments: comments
    });
    document.querySelector(
      `#answer-${answerId} .answer__comments`
    ).innerHTML = commentsHtml;
  });
};

const addAnswerComment = () => {
  //add event listener to each answer comment form
  document
    .querySelectorAll(".answer__comments-form-container form")
    .forEach((answerCommentForm) => {
      answerCommentForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(answerCommentForm);
        const content = formData.get("content");
        const question = document.querySelector(".question");
        const questionId = question.dataset.questionId;
        const answerId = answerCommentForm.id;
        try {
          const res = await fetch(
            `/api/questions/${questionId}/answers/${answerId}/comment`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ content }),
            }
          );
          if (!res.ok) {
            throw res;
          }
          answerCommentForm.reset();

          await fetchAnswerComments();
        } catch (e) {
          handleErrors(e, `#answer-${answerId} .answer__errors-container`);
        }
      });
    });
};

fetchQuestionComments();
fetchAnswerComments();

const userId = document.querySelector(".question__user").dataset.userId;

if (userId) {
  addQuestionComment();
  addAnswerComment();
}


