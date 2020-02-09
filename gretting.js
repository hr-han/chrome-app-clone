const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currUser",
 SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    
    greeting.innerText = `Hello ${text}`;
}

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currValue = input.value;
    
    paintGreeting(currValue);
    saveName(currValue);
}

function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
    
}

function loadName() {
    const currUser = localStorage.getItem(USER_LS);
    if (currUser !== null) {
        paintGreeting(currUser);
    }
    else {
        askName();
    }
}




function init() {
    loadName();
    
}

init();