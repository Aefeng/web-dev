let message =["Hello", "my", "name", "is", "Per"]
let greetingEl = document.getElementById("greeting-el")

for (i=0; i < message.length; i += 1 ){
    greetingEl.textContent += " "+ message[i]
}