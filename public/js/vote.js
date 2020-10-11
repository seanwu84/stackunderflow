const getVotes = async () => {
  const res = await fetch(`/api/questions/${questionId}/vote`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  const votes = await res.json();

  if (votes.questionVote) {
    if (votes.questionVote === 1) {
      document.querySelector(".question__upvote").classList.add("on")
    } else if (votes.questionVote === -1) {
      document.querySelector(".question__downvote").classList.add("on")
    }
  }

  votes.answerVotes.forEach(obj => {
    if (obj.value === 1) {
      document.querySelector(`#answer-${obj.answerId} .answer__upvote`).classList.add("on")
    } else {
      document.querySelector(`#answer-${obj.answerId} .answer__downvote`).classList.add("on")
    }
  });
}

const updateGUI = (updateData, clickedElement) => {
  const voteContainer = clickedElement.parentNode.parentNode;
  const scoreContainer = voteContainer.querySelector('.question__score-container')
    || voteContainer.querySelector('.answer__score-container');
  const upVote = voteContainer.querySelector('.question__upvote')
    || voteContainer.querySelector('.answer__upvote');
  const downVote = voteContainer.querySelector('.question__downvote')
    || voteContainer.querySelector('.answer__downvote');

  scoreContainer.innerHTML = updateData.currentVoteValue;
  upVote.classList.remove('on');
  downVote.classList.remove('on');
  if (updateData.currentStateValue === 1) {
    upVote.classList.add('on');
  } else if (updateData.currentStateValue === -1) {
    downVote.classList.add('on')
  }
};

const voteHandler = (url, vote) => {
  return async (e) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ voteValue: vote }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const updateData = await res.json();
    if (updateData.errors) {
      return alert('Something went wrong. Are you logged in?');
    }
    updateGUI(updateData, e.target);
  };
}


const userId = document.querySelector(".question__user").dataset.userId;
const questionId = document.querySelector(".question").dataset.questionId;
if (userId){
  getVotes();
  
  document
  .querySelector('.question__upvote')
  .addEventListener('click', voteHandler(`/api/questions/${questionId}/vote`, 1));
  
  document
  .querySelector('.question__downvote')
  .addEventListener('click', voteHandler(`/api/questions/${questionId}/vote`, -1));
  
  const answers = document.querySelectorAll('.question-answer');
  answers.forEach(answer => {
    const answerId = answer.dataset.answerId;
    answer
      .querySelector('.answer__upvote')
      .addEventListener('click', 
        voteHandler(`/api/questions/${questionId}/answers/${answerId}/vote`, 1));
  
    answer
      .querySelector('.answer__downvote')
      .addEventListener('click',
        voteHandler(`/api/questions/${questionId}/answers/${answerId}/vote`, -1));
  });
}