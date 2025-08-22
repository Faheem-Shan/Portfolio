// Bubble effect
// const bubble =document.querySelector('.bubble');
// if(bubble){
//     document.addEventListener('mousemove',(e) =>{
//         bubble.style.transform = `translate(${e.clientX}px,${e.clientY}px)`
//     });
// }
// Bubble follows the mouse
// const bubble = document.querySelector('.bubble');

// if (bubble) {
//   document.addEventListener('mousemove', (e) => {
//     bubble.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`; 
//   });
// }


// Simple form handling (can replace with EmailJS later)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  status.textContent = "Message sent successfully! (Demo)";
  form.reset();
});

//text animation like hacking
const text="Hi, I'm Faheem Shan👋";
const animatedText = document.getElementById("animatedText");
let i =0;
function typeEffect(){
  if (i < text.length) {
        animatedText.textContent += text.charAt(i); // add one letter
        i++;
        setTimeout(typeEffect, 100); // wait 100ms, then call again
      }
    }
  window.onload = typeEffect; // run function when page loads
