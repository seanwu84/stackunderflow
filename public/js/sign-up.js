import { handleErrors } from "/js/utils.js";

const signUpForm = document.querySelector(".sign-up-form");

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
            throw res;
        }
        const {
            token,
            user: { id },
        } = await res.json();
        //localStorage.setItem("SLIPBOP_OVERFLOW_ACCESS_TOKEN", token);
        document.cookie = `loginToken=${token}`
        //localStorage.setItem("SLIPBOP_OVERFLOW_CURRENT_USER_ID", id);
        window.location.href = "/";
    } catch (err) {
        handleErrors(err);
    }
});