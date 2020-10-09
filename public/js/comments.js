import { renderTemplate, handleErrors } from "/js/utils.js";

const fetchQuestionComments = async () => {
  const question = document.querySelector(".question");
  const questionId = question.dataset.questionId;

  const res = await fetch(`/api/questions/${questionId}/comments`);
  const comments = await res.json();

  const commentsHtml = await renderTemplate("/templates/comments.hb", {
    comments: comments.questionComments,
  });

  document.querySelector(".question .comments").innerHTML = commentsHtml;
};

fetchQuestionComments();

const addQuestionCommentForm = document.querySelector(
  ".add-question-comment-form"
);

const addQuestionComment = () => {
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
          Cookie: `${document.cookie}`,
        },
        body: JSON.stringify({ content }),
      });
      if (res.status === 401) {
        window.location.href = "/users/login";
        return;
      }
      if (!res.ok) {
        throw res;
      }
      addQuestionCommentForm.reset();

      await fetchQuestionComments();
    } catch (e) {
      handleErrors(e);
    }
  });
};

if (addQuestionCommentForm) {
  addQuestionComment();
}

const fetchAnswerComments = async () => {
  const question = document.querySelector(".question");
  const questionId = question.dataset.questionId;
  const answers = document.querySelectorAll(".answer-comments");
  answers.forEach(async (answer) => {
    const answerId = answer.dataset.answerId;
    // console.log(answerId);
    const res = await fetch(
      `/api/questions/${questionId}/answers/${answerId}/comments`
    );
    const comments = await res.json();
    const commentsHtml = await renderTemplate("/templates/comments.hb", {
      comments: comments.answerComments,
    });
    document.querySelector(
      `.answer-${answerId} .answer-comments`
    ).innerHTML = commentsHtml;
  });
};

fetchAnswerComments();

const addAnswerComment = () => {
  //add event listener to each answer comment form
  document
    .querySelectorAll(".answer-comments + form")
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
          if (res.status === 401) {
            window.location.href = "/users/login";
            return;
          }
          if (!res.ok) {
            throw res;
          }
          answerCommentForm.reset();

          await fetchAnswerComments();
        } catch (e) {
          handleErrors(e);
        }
      });
    });
};

addAnswerComment();
