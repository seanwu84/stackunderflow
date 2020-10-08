// import { handleErrors } from "../../utils/utils";

// const form = document.querySelector(".create-comment-form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const message = formData.get("content");
//   const body = { message };
//   try {
//     const res = await fetch(`/api/questions/${questionId}/comments`, {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     if (res.status === 401) {
//       window.location.href = "/log-in";
//       return;
//     }
//     if (!res.ok) {
//       throw res;
//     }
//     form.reset();
//     await fetchComments();
//   } catch (err) {
//     handleErrors(err);
//   }
// });
