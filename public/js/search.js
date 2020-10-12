let page = window.location.href.toString();
let query;
if(page.includes("search")){
    page = "search";
    query = window.location.href.split("=")[1]
} else{
    page = "home";
}

const getQuery = async(query) => {
    let url;
    if(page === "search"){
        url = "/api/search/popular/1";
    } else{
        url = "/api/search/homePage";
    }
    const res = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({query})
    });
    const resdata = await res.json();
    resdata.pop();
    if (resdata.length !== 0){
      addQuestions(resdata);
    } else {
      noResults();
    }
}

const addQuestions = (resdata) =>{
    const container = document.getElementById("searchResults");
    resdata.forEach(function(el) {
        const result = document.createElement("div");
        result.classList.add("search-result");

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
        
        const voteNumber = document.createElement("div");
        voteNumber.classList.add("voteNumber");
        voteNumber.innerHTML = el.score;
        votes.appendChild(voteNumber);
        
        const h6votes = document.createElement("div");
        h6votes.innerHTML = "Votes";
        votes.appendChild(h6votes);
        
        const answerNumber = document.createElement("div");
        answerNumber.classList.add("answerNumber");
        answers.appendChild(answerNumber);
        
        const h6answers = document.createElement("div");
        h6answers.innerHTML = "Answers";
        answers.appendChild(h6answers);
        
        const questionTitle = document.createElement("div");
        questionTitle.classList.add("questionTitle");
        questionTitle.innerHTML = el.title || el.Question.title;
        textBlock.appendChild(questionTitle);
        
        const content = document.createElement("div");
        content.classList.add("content");
        content.innerHTML = el.content;
        textBlock.appendChild(content);
        
        const info = document.createElement("div");
        info.classList.add("info")
        textBlock.appendChild(info);
        
        const author = document.createElement("div");
        author.classList.add("author");
        author.innerHTML = el.User.username;
        info.appendChild(author);
        
        const date = document.createElement("div");
        date.classList.add("date");
        el.createdAt = new Date(el.createdAt);
        date.innerHTML = el.createdAt.toString().split(':').slice(0, -1).join(':');
        info.appendChild(date);

        let type;
        if(el.Answers){
            type = "Q: "
            answerNumber.innerHTML = el.Answers.length;
        }else{
            type= "A: "
        }
        if(page === "search"){
            questionTitle.innerHTML = type + questionTitle.innerHTML;
        }
        if(el.Question){
            questionTitle.innerHTML = `<a class="colorMeBlack" href="/questions/${el.Question.id}"> ${questionTitle.innerHTML}</a>`;
        } else{
            questionTitle.innerHTML = `<a class="colorMeBlack" href="/questions/${el.id}"> ${questionTitle.innerHTML}</a>`;
        }
       
        container.appendChild(result)

    })
}

const noResults = () => {
  const container = document.getElementById("searchResults");
  const result = document.createElement("div");
  result.classList.add("search-result");

  const noResults = document.createElement("h3");
  noResults.classList.add("no-results");
  noResults.innerHTML = `No results for search: ${query}`;

  result.appendChild(noResults);
  container.appendChild(result)
}

getQuery(query)