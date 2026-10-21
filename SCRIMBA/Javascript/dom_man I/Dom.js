let welcomeEl=document.getElementById("welcome-el")

let name="Emoefe"
let greeting="Hi, good morning "
welcomeEl.innerText=greeting+name

welcomeEl.innerText += "😘"
// The += operator just adds the emoji to the already existing variable on the right
console.log(welcomeEl)