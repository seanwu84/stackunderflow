const query = window.location.href.split("=")[1]


const getQuery = async(query) => {
    const res = await fetch("/api/search/popular/1", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({query})
    });
    const resdata = await res.json();
    resdata.pop();
    addQuestions(resdata)
}

const addQuestions = (resdata) =>{
    const container = document.getElementById("searchResults");
    resdata.forEach(function(el) {
        const result = document.createElement("div");
        result.classList.add("result");

        const voteBlock = document.createElement("div");
        voteBlock.classList.add("voteBlock");
        result.appendChild(voteBlock);

        const textBlock = document.createElement("div");
        textBlock.classList.add("textBlock");
        result.appendChild(textBlock);

        const votes = document.createElement("div");
        votes.classList.add("votes")
        voteBlock.appendChild(votes)

        const answers = document.createElement("div");
        answers.classList.add("answers")
        if(el.Answers){
            voteBlock.appendChild(answers);
        }

        const voteNumber = document.createElement("p");
        voteNumber.classList.add("voteNumber");
        votes.appendChild(voteNumber);

        const h6votes = document.createElement("h6");
        votes.appendChild(h6votes);

        const answerNumber = document.createElement("p");
        answerNumber.classList.add("answerNumber");
        answers.appendChild(answerNumber);

        const h6answers = document.createElement("h6");
        answers.appendChild(h6answers);

        const questionTitle = document.createElement("h3");
        questionTitle.classList.add("questionTitle");
        textBlock.appendChild(questionTitle);

        const content = document.createElement("p");
        content.classList.add("content");
        textBlock.appendChild(content);

        const info = document.createElement("div");
        info.classList.add("info")
        textBlock.appendChild(info);

        const author = document.createElement("p");
        author.classList.add("author");
        info.appendChild(author);

        const date = document.createElement("p");
        date.classList.add("date");
        info.appendChild(date);

        voteNumber.innerHTML = el.score;
        h6votes.innerHTML = "Votes";
        let type;
        if(el.Answers){
            type = "Q: "
            answerNumber.innerHTML = el.Answers.length;
        }else{
            type= "A: "
        }
        h6answers.innerHTML = "Answers";
        questionTitle.innerHTML = el.title || el.Question.title;
        questionTitle.innerHTML = type + questionTitle.innerHTML;
        if(el.Question){
            questionTitle.innerHTML = `<a class="colorMeBlack" href="/questions/${el.Question.id}"> ${questionTitle.innerHTML}</a>`;
        } else{
            questionTitle.innerHTML = `<a class="colorMeBlack" href="/questions/${el.id}"> ${questionTitle.innerHTML}</a>`;
        }
       
        content.innerHTML = el.content;
        author.innerHTML = el.User.username;
        el.createdAt = new Date(el.createdAt)
        date.innerHTML = `${el.createdAt.getMonth()}/${el.createdAt.getDate()}/${el.createdAt.getFullYear()}`;

        container.appendChild(result)

    })
}

getQuery(query)