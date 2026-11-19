let hasCompletedCourse = true
let giveCertificate = true


// this is the and operation it will only run the code undet that condition when both are  true
if (hasCompletedCourse === true && giveCertificate === true){
    generateCertificate()
}

function generateCertificate(){
    console.log("Generating certificate ...")
}


let hasSolvedChallenge = false
let hasHintLeft = false

if (hasSolvedChallenge === false && hasHintLeft === false){
    showsolution()
}

function showsolution(){
    console.log("Showing the solution.....")
}

// THE OR OPERATOR (if at least one is true then we have a true condition)
// represented as ||

let alarmRing = false
let hasWokenUp = true

if (alarmRing === true || hasWokenUp === true){
    console.log("Phone: My job is done")
}