import { handleErrors } from "/js/utils.js";

const answerForm = document.querySelector(".your-answer__form");
const questionId = document.querySelector('.question').dataset.questionId;

answerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(answerForm);
  const content = formData.get("content");
  // const _csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const body = { content };
  try {
    const res = await fetch(`/api/questions/${questionId}/answers`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        // "CSRF-Token": _csrf
      },
      // credentials: "same-origin"
    });
    if (!res.ok) {
      handleErrors(res, '.your-answer__errors-container');
      return;
    }
    const response = await res.json();
    console.log(response);
    window.location.reload();
  } catch (err) {
    handleErrors(err);
  }
});