let fighters = ["🤣","👷‍♂️", "👷‍♀️","👩‍🎓","👨‍🎓","🧑‍🎓","👩","👨‍🏫","👨‍🌾","👩‍🔧","🧑‍🍳","🧑‍🔬","🦹‍♀️","🧙","🙎‍♂️","💇","🦍","🐈","🐄","🐁","🐂","🐕","🦁","🦭","♌","😁", "🥰", "😶‍🌫️", "🤐"]
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightbutton")

fightButton.addEventListener("click", function(){
    fightIndex1 = Math.floor(Math.random() * fighters.length)
    fightIndex2 = Math.floor(Math.random() * fighters.length)

    stageEl.textContent = " " + fighters[fightIndex1] +" vs " + fighters[fightIndex2]
})