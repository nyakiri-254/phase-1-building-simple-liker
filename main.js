// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener(DOMcontentLoder , function(EMPTY_HEART){
fetch ("http://mimicServer.example.com") 
.then(res=> res.data() {
  result =error  
} .catch((e)=> {
  if (failurestatus){console.log =error;
    
  }})
)}
  
)
const modal = document.querySelector('hidden',);
  setTimeout((modal) =>{
    console.log("show after 3 seconds");
  } , 3000)
  if(returnSuccess) {return FULL_HEART}



const activatedHeart = document.getElementById("activated-heart").style.color= "red";
activatedHeart.removeEventListener("click',activated-heart"){
  const result= document.querySelector('result',);
  result.innerHTML=EMPTY_HEART
}
fun



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
//let modal = document.querySelector('.hidden')
   // expect(modal).not.to.equal(null)
