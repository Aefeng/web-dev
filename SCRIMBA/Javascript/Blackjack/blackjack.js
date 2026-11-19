// function getRandomInt(min, max){
//     return Math.floor(Math.random() * (max-min + 1)) + min
// }
// the function above generates a number between the min and max
// .floor(rounds the number to an integer so we don't have decimls)
// .random(selects a random number)
// max-min +1 (this is the standard for the numbers in the range i.e b/w 2 and 11 thats 10 numbers so you dont have to calculate it by hand)
// + min ensures that it starts from the minimum number 1.e 2

//methods are simply functions attached to objects
Cards=[]
sum = 0
console.log(sum)
let message = ""
let hasBlackJack = false 
// this helps us track if the user has won
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    Name: "Emoefe",
    Chips: 200
}

playerEl.textContent = player.Name + ": $" + player.Chips
function getRandomCard(min,max){

    let random_num =  Math.floor(Math.random() * 13) + 1

    if (random_num === 1){
        return 11
    }
    else if(random_num > 10   ){
        return 10
    }
    else{
        return random_num
    }
}

//when you declare functions using the function(){} 
//decalaration way it is hoisted to the top so the function can be used even on lines befor it is written

function startGame(){
    hasBlackJack = false 
    Cards = []
    isAlive = true
    let FirstCard = getRandomCard()
    let SecondCard = getRandomCard()
    sum = FirstCard + SecondCard


    Cards.push(FirstCard,SecondCard)
    renderGame()
}

function renderGame(){
    // now to create the Logic for a Bj game
    
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < Cards.length; i++){
        cardsEl.textContent += Cards[i] + " "  
    }
    sumEl.textContent = "sum: " + sum 
    
    if(sum <= 20){
        message = "Do you want to draw a new card?? 🥲🤔"
    } else if(sum === 21){
        message = "Wohoo! you got blackjack 🥳🥳"
        hasBlackJack = true
    } else{
        message= "You're out of the game, Maybe next time! 🤡🤡"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(message)
}

function newCard(){
if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard()
    Cards.push(thirdCard)
    sum += thirdCard
    renderGame()
}   
}