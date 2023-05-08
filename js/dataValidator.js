let emailInput = document.querySelector("#inputTextEmail");
let passwordInput = document.querySelector("#inputPassword");
let labelMessageEmailValidator = document.querySelector(".labelMessageEmailValidator");
let labelMessageDataValidator = document.querySelector(".labelMessageDataValidator");
const form = document.querySelector('form');

export const email = emailInput.value.trim();

//Here I create a possible status for inputs to make it reusable 
let inputStatus = {
    empty : "",
    characters: 8
};

//This object has the possible answers to use it when possible 
let answers = {
    positiveAnswer: "OK",
    wrongEmail: "Verify your user",
    negativeAnswer: "You should verify you user or password",
    notEnoughCharacters: "Password must be at least 8 characters"
};

//This function validates email input and send a possible answer
emailInput.addEventListener('input', () => {
    if (email === inputStatus.empty || email.length > 30) {
        labelMessageEmailValidator.innerText = answers.wrongEmail;
    }
});
//This function validates password input and send a possible answer, if the data validation is not correct the form can be send
form.addEventListener('submit', (event) => {
    const password = passwordInput.value.trim();
    if (password === inputStatus.empty) {
        labelMessageDataValidator.innerText = answers.negativeAnswer;
        event.preventDefault();
    } else if (password.length < inputStatus.characters) {
        labelMessageDataValidator.innerText = answers.notEnoughCharacters;
        event.preventDefault();
    }
});
