
const upvote = document.querySelectorAll('.upvote');
const downvote = document.querySelectorAll('.downvote')  

upvote.forEach((el) => {
    el.addEventListener('click', async (e) => {
      let type;
      let id;
      let elem = e.target
      while(!elem.classlist.includes("question") || !elem.classlist.includes("answer")) {
          elem = elem.parentNode;
          if(elem.classlist.includes("question")) {
              type = 'questions';
              id = elem.getAttribute("data-question-id")
          } else {
              type = 'answers';
              id = elem.getAttribute("answer-id")
            }
      }
      const res = await fetch(`/api/${type}/${id}/vote`, { 
          method: "POST",
          body: JSON.stringify({voteValue: 1 }),
          headers: {
              "Content-Type": "application/json",
          },
        })
    
      const updateData = await res.json();
      if(updateData.errors) {
          alert('Something went wrong. Are you logged in?')
          return
      }
      UpdateGUI(updateData, e.target) 
    });
})

const UpdateGUI = (updateData, clickedElement) => {
  const voteNodes = clickedElement.parentNode.childNodes
  let upVote; 
  let downVote;
  let count;
  voteNodes.forEach((el) => {
      if (el.classList.includes("upvote")) {
          upVote = el;
      } else if (el.classList.includes("downvote")) {
          downVote = el;
      } else if (el.classList.includes("count")) {
          count = el;
      }
  })
  count.innerHTML = updateData.currentVoteValue;
  upVote.classList.remove('on');
  downVote.classList.remove('on');
  if (updateData.currentStateValue === 1) {
      upVote.classList.add('on');
  } else if (updateData.currentStateValue === -1) {
      downVote.classList.add('on')
  }
};

downvote.forEach((el) => {
    el.addEventListener('click', async(e) => {
        let type;
        let id;
        let elem = e.target
        while (!elem.classlist.includes("question") || !elem.classlist.includes("answer")) {
            elem = elem.parentNode;
            if (elem.classlist.includes("question")) {
                type = 'questions';
                id = elem.getAttribute("data-question-id")
            } else {
                type = 'answers';
                id = elem.getAttribute("answer-id")
            }
        }
        const res = await fetch(`/api/${type}/${id}/vote`, {
            method: "POST",
            body: JSON.stringify({ voteValue: -1 }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    
        const updateData = await res.json();
        if (updateData.errors) {
            alert('Something went wrong. Are you logged in?')
            return}
    
        UpdateGUI(updateData, e.target) 
    })
})

const getTotalVotes = async() => {
  const res = await fetch("/api/votes")
  const data = await res.json();

  return [data.questionVotes, data.getAnswerVotes ]
}

