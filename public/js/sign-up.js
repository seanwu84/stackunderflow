
import { handleErrors } from "/js/utils.js";
const signUpForm = document.querySelector(".pure-form");

signUpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const body = { email, password, username };
    try {
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            const errorjson = await res.json();
            const err = JSON.parse(errorjson).messages;
            err.forEach(function (el) {
                const errorMessageDisplay = document.createElement("p");
                errorMessageDisplay.innerHTML = el;
                errorMessageDisplay.classList.add("errorMessage")
                document.getElementById("errorDiv").appendChild(errorMessageDisplay)
            }) 
            return           
        }
        window.location.href = "/";
    } catch (err) {
        handleErrors(err);
    }
});