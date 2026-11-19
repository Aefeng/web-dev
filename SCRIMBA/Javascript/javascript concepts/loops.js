
//Start            Finish cond  stepsize
for(let i = 1; i < 6; i+= 1){
    console.log(i)
}

for (let i = 10;  i < 101;  i+= 10){
    console.log(i)
}

let messages =[
    "Hey, how's it going?",
    "I'm great, thank you and you?",
    "All good, Been working on my portfolio lately",
    "Same here, in this world you know we have to hustle", 
    "Nice meeting you"
]

end = messages.length

// now lets use a for loop to log out all the items in this array one after the other
for( let n = 0; n< end;  n += 1 ){
    console.log(messages[n])
}