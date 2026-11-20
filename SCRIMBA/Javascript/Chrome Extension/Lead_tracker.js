
function saveInput(){
    console.log("Button clicked!")
}

let inputBtn=document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    console.log("Button clicked from add event listener")
})