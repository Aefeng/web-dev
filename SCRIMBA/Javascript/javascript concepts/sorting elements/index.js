let fruit =["🍎","🍊","🍎","🍎", "🍊", "🍊", "🍎","🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function fruitSorter(){
    for (i = 0; i < fruit.length; i++){
        element = fruit[i]
        if (element === "🍎"){
        appleShelf.textContent += element
        }
        else{
        orangeShelf.textContent += element
        }
    }    
}
fruitSorter()