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

const updateGUI = (updateData, clickedElement) => {
  const voteContainer = clickedElement.parentNode.parentNode;
  const scoreContainer = voteContainer.querySelector('.question__score-container');
  // const voteNodes = voteContainer.childNodes;
  const upVote = voteContainer.querySelector('.question__upvote')
    || voteContainer.querySelector('.answer__upvote');
  const downVote = voteContainer.querySelector('.question__downvote')
    || voteContainer.querySelector('.answer__upvote');
  // voteNodes.forEach((el) => {
  //   if (el.classList.contains("upvote")) {
  //     upVote = el;
  //   } else if (el.classList.contains("downvote")) {
  //     downVote = el;
  //   } else if (el.classList.contains("score")) {
  //     count = el;
  //   }
  // })
  scoreContainer.innerHTML = updateData.currentVoteValue;
  upVote.classList.remove('on');
  downVote.classList.remove('on');
  if (updateData.currentStateValue === 1) {
    upVote.classList.add('on');
  } else if (updateData.currentStateValue === -1) {
    downVote.classList.add('on')
  }
};

// const getTotalVotes = async () => {
//   const res = await fetch("/api/votes")
//   const data = await res.json();

//   return [data.questionVotes, data.getAnswerVotes]
// }

// const voteHandler = async (e, url, answerId=null) => {

// }

const answers = document.querySelectorAll('.question-answer');

const questionId = document.querySelector('.question').dataset.questionId;

// if (questionId) {
getVotes();
// }

document
  .querySelector('.question__upvote')
  .addEventListener('click', async (e) => {
    const res = await fetch(`/api/questions/${questionId}/vote`, {
      method: "POST",
      body: JSON.stringify({ voteValue: 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updateData = await res.json();
    if (updateData.errors) {
      alert('Something went wrong. Are you logged in?')
      return
    }
    updateGUI(updateData, e.target)
  });

document
  .querySelector('.question__downvote')
  .addEventListener('click', async (e) => {
    const res = await fetch(`/api/questions/${questionId}/vote`, {
      method: "POST",
      body: JSON.stringify({ voteValue: -1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updateData = await res.json();
    if (updateData.errors) {
      alert('Something went wrong. Are you logged in?');
      return;
    }
    updateGUI(updateData, e.target);
  });

answers.forEach(answer => {
  const answerId = answer.dataset.answerId;
  answer
    .querySelector('.answer__upvote')
    .addEventListener('click', async (e) => {
      const res = await fetch(`/api/questions/${questionId}/answers/${answerId}/vote`, {
        method: "POST",
        body: JSON.stringify({ voteValue: 1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const updateData = await res.json();
      if (updateData.errors) {
        alert('Something went wrong. Are you logged in?')
        return
      }
      updateGUI(updateData, e.target)
    });

  answer
    .querySelector('.answer__downvote')
    .addEventListener('click', async (e) => {
      const res = await fetch(`/api/questions/${questionId}/answers/${answerId}/vote`, {
        method: "POST",
        body: JSON.stringify({ voteValue: -1 }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const updateData = await res.json();
      if (updateData.errors) {
        alert('Something went wrong. Are you logged in?')
        return
      }
      updateGUI(updateData, e.target)
    });
});