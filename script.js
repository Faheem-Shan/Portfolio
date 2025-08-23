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
function sendEmail(event) {
  event.preventDefault();

  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = "service_32tj4d8";
  const templateID = "template_urdsjmj";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      console.log(res);
      alert("Your message has been sent successfully!");
    })
    .catch(err => console.log(err));
}

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



const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.navbar ul'); // Target the <ul> inside the .navbar

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});