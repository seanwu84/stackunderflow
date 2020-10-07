const submitForm = async (e) =>{
    e.preventDefault() 
    const form = e.target;
    const data = new FormData(form);
    const email = data.get("email");
    const password = data.get("password")
    const res = await fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const resJSON = await res.json();
    if(res.status === 200){
        localStorage.setItem("token", resJSON.token);
        window.location.href = "/";
    } else{
        const errors = JSON.parse(resJSON).messages;
        //render errors
    }
    
}


window.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("login-form").addEventListener("submit", submitForm)
})