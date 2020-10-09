
const upvote = document.querySelectorAll('.upvote');
const downvote = document.querySelectorAll('.downvote')  

const getAllVotes

upvote.addEventListener('click', e => {
    e.target.classList.toggle('on')
})

downvote.addEventListener('click', e => {
    e.target.classList.toggle('on')
})

const getTotalVotes = async() => {
  const res = await fetch("/api/votes");
  const data = await res.json();
  return [data.questionVotes, data.getAnswerVotes ]
}


// const answerVotePermission = () => {
//     const res = await fetch("/api/votes");
//     const data = await res.json();
//     if (data.questionvotestatus) {
//         return data.questionVotes.value
//     } 
// }
//'method: post', {
// function () {
//         return {
//             upvoted: false,
//             downvoted: false
//     };
//     },
// method to use: {
//         upvote: function () {
//             upvoted = !upvoted;
//             downvoted = false;
//         },
//         downvote: function () {
//             downvoted = !downvoted;
//             upvoted = false;
//         }
//     },
// logic: {
//         votes: function () {
//             if (upvoted) {
//                 return post.votes + 1;
//             } else if (downvoted) {
//                 return post.votes - 1;
//             } else {
//                 return post.votes to api;
//             }
//         }
//     }
// });