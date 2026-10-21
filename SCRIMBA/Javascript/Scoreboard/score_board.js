let score_home=document.getElementById("score_home")
let actual_home_score=Number(score_home.textContent)
let score_away=document.getElementById("score_away")
let actual_away_score=Number(score_away.textContent)
console.log(typeof(actual_home_score))

function incr_1(){
    actual_home_score += 1
    score_home.textContent = actual_home_score

}

function incr_2(){
    actual_home_score += 2
    score_home.textContent = actual_home_score
}

// away score side
function incr_3(){
    actual_home_score += 3
    score_home.textContent = actual_home_score
}

function incr_away_1(){
    actual_away_score += 1
    score_away.textContent = actual_away_score
}

function incr_away_2(){
    actual_away_score += 2
    score_away.textContent = actual_away_score
}

function incr_away_3(){
    actual_away_score += 3
    score_away.textContent = actual_away_score
}