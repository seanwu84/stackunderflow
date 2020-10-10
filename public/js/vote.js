const getVotes = async () => {
  const res = await fetch(`/api/questions/${questionId}/vote`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const votes = await res.json();
  for (let id in votes) {
    if (id = "questionVote") {
      if (votes.questionVote === 1) {
        document.querySelector(".question__upvote").classList.add("on")
      } else if (votes.questionVote === -1) {
        document.querySelector(".question__downvote").classList.add("on")
      }
    }
    ////ADD ANSWER ID SELECT!!!!!!!!!
  }
}

const upvote = document.querySelectorAll('.upvote');
const downvote = document.querySelectorAll('.downvote');

const questionId = document.querySelector('.question').dataset.questionId;

if (qId) {
  getVotes();
}


upvote.forEach((el) => {
  el.addEventListener('click', async (e) => {
    let type;
    let id;
    let url;
    let elem = e.target
    while (!elem.classList.contains("question") && !elem.classList.contains("answer")) {
      elem = elem.parentNode;
      if (elem.classList.contains("question")) {
        type = 'questions';
        id = elem.getAttribute("data-question-id");
        url = `/api/${type}/${id}/vote`;
      } else {
        type = 'answers';
        id = elem.getAttribute("answer-id");
        url = `/api/questions/${qId}/${type}/${id}/vote`;
      }
    }

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ voteValue: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    const updateData = await res.json();
    if (updateData.errors) {
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
    if (el.classList.contains("upvote")) {
      upVote = el;
    } else if (el.classList.contains("downvote")) {
      downVote = el;
    } else if (el.classList.contains("count")) {
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
  el.addEventListener('click', async (e) => {
    let type;
    let id;
    let elem = e.target
    while (!elem.classList.contains("question") && !elem.classList.contains("answer")) {
      elem = elem.parentNode;
      if (elem.classList.contains("question")) {
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
      return
    }

    UpdateGUI(updateData, e.target)
  })
})

const getTotalVotes = async () => {
  const res = await fetch("/api/votes")
  const data = await res.json();

  return [data.questionVotes, data.getAnswerVotes]
}

