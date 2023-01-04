const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputOne = document.getElementById("password-one")
let inputTwo = document.getElementById("password-two")
let userNumber = document.getElementById("user-num-input")
let message = ""
let el = document.getElementById("user-num-input")

function enforceMinMax(el) {
  if (el.value != "") {
    if (parseInt(el.value) < parseInt(el.min)) {
      el.value = el.min;
    }
    if (parseInt(el.value) > parseInt(el.max)) {
      el.value = el.max;
    }
  }
}

function generatePassword() {
    let userLength = userNumber.value
    for (let i=0; i < userLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        message += characters[randomIndex]
        inputOne.textContent = message
    }
    message = ""
    for (let i=0; i < userLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        message += characters[randomIndex]
        inputTwo.textContent = message
    }
    message = ""
}