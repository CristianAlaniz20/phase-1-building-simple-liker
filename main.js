// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll(".like-glyph");

const div = document.querySelector("#modal");
const p = document.querySelector("#modal-message");

likeButtons.forEach(button => button.addEventListener("click", function() {
  mimicServerCall()
  .then(response => {
    if (button.textContent === EMPTY_HEART) {
      button.classList.add("activated-heart")
      button.textContent = FULL_HEART
    } else if (button.textContent === FULL_HEART) {
      button.classList.remove("activated-heart")
      button.textContent = EMPTY_HEART
    }
    console.log(response)
    })
  .catch(error => {
    div.classList.remove("hidden")
    p.textContent = error
    setTimeout(() => {
       div.classList.add("hidden")
    }, 3000);
    console.log(error)
    })
  }
));



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
