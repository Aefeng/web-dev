//let's write a function that gives a random number from 1 to 6 so basically a dice function
function Dice(){
    return Math.floor(Math.random() * 6) + 1
}

result = Dice()
console.log(result)