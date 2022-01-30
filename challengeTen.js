let welcomeEl = document.getElementById("welcome-el")

let username = "Rani"
let greeting = "Welcome back "

function saluteUser(username) {
    welcomeEl.innerText = greeting + username
    
}
saluteUser(username)

function addEmoji() {
    welcomeEl.innerText = welcomeEl.innerText + " 🖐️"
}


addEmoji()