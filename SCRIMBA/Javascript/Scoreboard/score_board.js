let score_home=document.getElementById("score_home")
let actual_home_score=Number(score_home.textContent)
let score_away=document.getElementById("score_away")
let actual_away_score=Number(score_away.textContent)

let scores={
    home:actual_home_score,
    away:actual_away_score
}

const scoreDisplays={
    home:score_home,
    away:score_away
}

function addPoints(team, points) {
    scores[team] += points
    scoreDisplays[team].textContent = scores[team]
    winner()
}


function new_game(){
    score_home.textContent = 0
    score_away.textContent = 0
    scores["home"] = 0
    scores["away"] = 0
    winner()
    
}

function winner(){

    const homeBox = document.getElementById("home-box")
    const awayBox = document.getElementById("away-box")

    homeBox.classList.remove("winning")
    awayBox.classList.remove("winning")

    if (scores.home > scores.away){
        homeBox.classList.add("winning")
    }

    else if(scores.home < scores.away){
        awayBox.classList.add("winning")
    }
    
}

