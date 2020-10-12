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


const getAnswerAndCommentData = () =>{
    
}
