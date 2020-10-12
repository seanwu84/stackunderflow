const tabs = document.querySelectorAll(".userProfileTab");
const addBoldAndMakeVisible = (e) =>{
    tabs.forEach(function(el){
        el.classList.remove("makeMeBold")
    });
    e.currentTarget.classList.add("makeMeBold");
    const resultPages = document.querySelectorAll(".resultPage");
    resultPages.forEach((el)=>{
        el.classList.add("profileHidden")
    });
    document.querySelector(`.${e.currentTarget.id}`).classList.remove("profileHidden")
}
tabs.forEach(el=>{
    el.addEventListener("click", addBoldAndMakeVisible);
});


const getAnswerAndCommentData = async () =>{
    const userId = window.location.href.split("users/")[1]
    const res = await fetch(`/api/users/${userId}`, {
        method: "GET"
    });
    const data = await res.json();
    const profileAnswers = document.getElementById("profileAnswersResultPage")
    const profileComments = document.getElementById("profileCommentsResultPage")
    data.Answers.forEach(function(el){  
        const profileResult = document.createElement("div");
        profileResult.classList.add("profileResult");
        
        const textBlock = document.createElement("div");
        textBlock.classList.add("textBlock");
        profileResult.appendChild(textBlock);

        const questionTitle = document.createElement("h3");
        questionTitle.classList.add("questionTitle");
        textBlock.appendChild(questionTitle);

        const anchor = document.createElement("a");
        anchor.classList.add("colorMeBlack");
        anchor.setAttribute("href", `/questions/${el.Question.id}`);
        anchor.innerHTML = el.Question.title;
        questionTitle.appendChild(anchor);

        const content = document.createElement("p");
        content.classList.add("content", "moveMeUpScotty");
        content.innerHTML = el.content;
        textBlock.appendChild(content);

        profileAnswers.appendChild(profileResult)
    });
    data.QuestionComments.forEach(function(el){  
        const profileResult = document.createElement("div");
        profileResult.classList.add("profileResult");
        
        const textBlock = document.createElement("div");
        textBlock.classList.add("textBlock");
        profileResult.appendChild(textBlock);

        const questionTitle = document.createElement("h3");
        questionTitle.classList.add("questionTitle");
        textBlock.appendChild(questionTitle);

        const anchor = document.createElement("a");
        anchor.classList.add("colorMeBlack");
        anchor.setAttribute("href", `/questions/${el.Question.id}`);
        anchor.innerHTML = el.Question.title;
        questionTitle.appendChild(anchor);

        const content = document.createElement("p");
        content.classList.add("content", "moveMeUpScotty");
        content.innerHTML = el.content;
        textBlock.appendChild(content);

        profileComments.appendChild(profileResult)
    })
    data.AnswerComments.forEach(function(el){  
        const profileResult = document.createElement("div");
        profileResult.classList.add("profileResult");
        
        const textBlock = document.createElement("div");
        textBlock.classList.add("textBlock");
        profileResult.appendChild(textBlock);

        const questionTitle = document.createElement("h3");
        questionTitle.classList.add("questionTitle");
        textBlock.appendChild(questionTitle);

        const anchor = document.createElement("a");
        anchor.classList.add("colorMeBlack");
        anchor.setAttribute("href", `/questions/${el.Answer.Question.id}`);
        anchor.innerHTML = el.Answer.Question.title;
        questionTitle.appendChild(anchor);

        const content = document.createElement("p");
        content.classList.add("content", "moveMeUpScotty");
        content.innerHTML = el.content;
        textBlock.appendChild(content);

        profileComments.appendChild(profileResult)
    })
}


getAnswerAndCommentData();