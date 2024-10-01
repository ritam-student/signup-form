// Get the elements
const signupBtn = document.getElementById('signup-btn');
const formContainer = document.getElementById('signup-form-container');
const signupForm = document.getElementById('signup-form');

// Show form when "Sign Up" button is clicked
signupBtn.addEventListener('click', () => {
  formContainer.classList.remove('hidden'); // Show the form
});

// Hide form when "Submit" button is clicked and form is submitted
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent actual form submission for demo purposes

  // You can add form validation or send data to the server here

  formContainer.classList.add('hidden'); // Hide the form
});






// for motion text



const h1 = document.getElementById("h1-para");

const text = "Welcome to Signup form UI";
const words = text.split("");

let wordIdx = 0;
let visibleText = "";


function para (){
    if(wordIdx < words.length){
        visibleText += words[wordIdx];
        h1.innerHTML = visibleText;
        wordIdx++;
    }else {
        wordIdx = 0;
        visibleText = "";
    }
}



setInterval(para , 100);