// import { render } from "/js/utils.js"

document.addEventListener("DOMContentLoaded", async ()=> {
    const question = document.querySelector(".question")    
    const questionId = question.dataset.questionId

    const res = await fetch(`/api/questions/${questionId}/comments`);
    const comments = await res.json();
    console.log(comments)
    const templateRes = await fetch("/templates/comments.hb");
    const template = await templateRes.text();

    const compiledTemplate = Handlebars.compile(template);
    const commentsHtml = compiledTemplate({
        comments: comments.questionComments
    })

    // document.querySelector(".question .comments").innerHTML = commentsHtml;

    // render()
})








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
