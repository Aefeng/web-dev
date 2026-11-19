let featuredPosts=[
    "Check out my scoreboard",
    "Here's the code for my project",
    "I've just launched a new app on netlify"
]

//arrays are actually very ,uch like lists in python
// it 0 indexed
// check the length using a .length property

console.log(featuredPosts.length)
let Length = featuredPosts.length
console.log(featuredPosts[Length-1]) // a simple way to display the last element in the array

let cards = [7,4,8]
cards.push(9) // adds the number 9 to the end of the array
cards.pop(9) // removes the last number from the array
console.log(cards)
