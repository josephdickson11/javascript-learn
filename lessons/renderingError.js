function errorMessage() {
    errorPrompt = document.getElementById("error").textContent
    console.log(errorPrompt)
    wrong = "Something went wrong, please refresh page and try again"
    document.getElementById("error").textContent = wrong
    
}

