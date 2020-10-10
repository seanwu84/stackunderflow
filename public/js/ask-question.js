import { handleErrors } from "/js/utils.js";

const questionForm = document.querySelector(".question-form");

questionForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(questionForm);
  const title = formData.get("title");
  const content = formData.get("content");
  const _csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  const body = { title, content };
  try {
    const res = await fetch("/api/questions", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "CSRF-Token": _csrf
      },
      credentials: "same-origin"
    });
    if (!res.ok) {
      handleErrors(res);
      return;
    }
    const response = await res.json();
    window.location.href = response;
  } catch (err) {
    handleErrors(err);
  }
});