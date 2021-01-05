import { handleErrors } from "/js/utils.js";

const submitForm = async (e) =>{
    e.preventDefault();
    console.log('Called', e.target);
    const form = e.target;
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password")
    const res = await fetch("/api/users/token", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    if(res.status === 201){
        window.location.href = "/";
    } else{
        handleErrors(res);
    }  
}

const demoLogin = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("email").value = "demo@user.com"
    document.getElementById("password").value = "password";
    document.querySelector(".formSubmit").click();
}


window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("login-form").addEventListener("submit", submitForm)
    document.getElementById("demoLogin").addEventListener("click", demoLogin)
})