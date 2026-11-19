const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
                    "a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z",
                    "0","1","2","3","4","5","6","7","8","9","~","`","!",
                    "@","#","$","%","^","&","*","(",")","_","-","+","=",
                    "{","[","}","]",",","|",":",";","<",">",".","?","/"]

let letters = ["A","B","C","D","E","F","G","H","I","J","K",
                "L","M","N","O","P","Q","R","S","T","U","V",
                "W","X","Y","Z","a","b","c","d","e","f","g",
                "h","i","j","k","l","m","n","o","p","q",
                "r","s","t","u","v","w","x","y","z"]

let numbers = ["0","1","2","3","4","5","6","7","8","9"]
let symbols = ["~","`","!","@","#","$","%","^","&",
                "*","(",")","_","-","+","=","{","[","}",
                "]",",","|",":",";","<",">",".","?","/"]

// here we create a model  of our html here in js so we can chenge or modify them
let displayEl1 = document.getElementById("display_1")
let displayEl2 = document.getElementById("display_2")
let SymbolsEl = document.getElementById("symbols")
let NumbersEl = document.getElementById("numbers")
let copiedMsg = document.getElementById("copied_msg")


function generatePassword(){
    displayEl1.textContent = ""
    displayEl2.textContent = ""
    let lengthEl=document.getElementById("password_length").value
    let numLengthEl=Number(lengthEl)

        // these conditional statments helps us remove or add symbols nad numbers depending on what the user wants
       if(SymbolsEl.checked && NumbersEl.checked){
            for(let i = 0; i < numLengthEl; i++){
                    let index = Math.floor(Math.random() * characters.length)
                    let index2 = Math.floor(Math.random() * characters.length)
                    let Digit = characters[index]
                    let Digit_2 = characters[index2]
                    displayEl1.textContent += Digit
                    displayEl2.textContent += Digit_2
            }  
        } 

        else if (SymbolsEl.checked && NumbersEl.checked === false){
            const letters_and_symb = letters.concat(symbols) 

            for(let i = 0; i < numLengthEl; i++){
                    let index = Math.floor(Math.random() * letters_and_symb.length)
                    let index2 = Math.floor(Math.random() * letters_and_symb.length)
                    let Digit = letters_and_symb[index]
                    let Digit_2 = letters_and_symb[index2]
                    displayEl1.textContent += Digit
                    displayEl2.textContent += Digit_2
            }  

        }   

        else if(SymbolsEl.checked === false && NumbersEl.checked ){
            const letters_and_num = letters.concat(numbers)

            for(let i = 0; i < numLengthEl; i++){
                    let index = Math.floor(Math.random() * letters_and_num.length)
                    let index2 = Math.floor(Math.random() * letters_and_num.length)
                    let Digit = letters_and_num[index]
                    let Digit_2 = letters_and_num[index2]
                    displayEl1.textContent += Digit
                    displayEl2.textContent += Digit_2
            } 
        }

        else{
            for(let i = 0; i < numLengthEl; i++){
                    let index = Math.floor(Math.random() * letters.length)
                    let index2 = Math.floor(Math.random() * letters.length)
                    let Digit = letters[index]
                    let Digit_2 = letters[index2]
                    displayEl1.textContent += Digit
                    displayEl2.textContent += Digit_2
            } 

        }
}


// this is a function that will add a text to a p element for a given period of time
function copyPassword(displayEl){
    if(displayEl.textContent ===""){
        return
    }
    //this is what you use to allow a user to copy to clipboard
    navigator.clipboard.writeText(displayEl.textContent)
    copiedMsg.textContent ="Copied!"

    //this will display the copied text for 1s or 1000ms
    setTimeout(()=>{
        copiedMsg.textContent = ""
    }, 1000)
}

displayEl1.addEventListener('click', () => copyPassword(displayEl1))
displayEl2.addEventListener('click', () => copyPassword(displayEl2))