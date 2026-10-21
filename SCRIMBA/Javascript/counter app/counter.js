let countEl = document.getElementById("count_el")
entries=document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}


function save(){
    dash=" - "
    count_Save=countEl.innerText + dash
    entries.textContent += count_Save
    console.log(countEl.innerText)
    // so when the save button is clicked the count initialises
    countEl.textContent = 0
    count = 0
}