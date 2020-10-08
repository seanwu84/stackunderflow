const submitForm = async (e) =>{
    document.getElementById("errorDiv").innerHTML = ""
    e.preventDefault() 
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
    const resJSON = await res.json();
    if(res.status === 201){
        window.location.href = "/";
    } else{
        const errors = JSON.parse(resJSON).messages;
        errors.forEach(function(el) {
            const errorMessageDisplay = document.createElement("p");
            errorMessageDisplay.innerHTML = el;
            errorMessageDisplay.classList.add("errorMessage")
            document.getElementById("errorDiv").appendChild(errorMessageDisplay)
        })
    }
    
}

const demoLogin = (e) =>{
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("email").value = "jamesballard@gmail.com"
    document.getElementById("password").value = "slambam123"
}


window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("login-form").addEventListener("submit", submitForm)
    document.getElementById("demoLogin").addEventListener("click", demoLogin)
})