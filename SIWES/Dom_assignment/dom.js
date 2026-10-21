let form = document.querySelectorAll('input')
let submit = document.querySelector('#submit')
let clear = document.querySelector('#clear')
let message =document.querySelector('.message')

submit.addEventListener('click',()=>{
    Name = form[0].value
    Age = form[1].value
    Uni= form[2].value
    faculty = form[3].value
    dept = form[4].value
    level = form[5].value

    let Fmessage='My name is ' + Name + " i'm " + Age + 
    ' years old, I school at ' + Uni + ' in the Faculty of '
    + faculty + ' under the department of '+ dept + 
    " i'm currently in " + level +'level'
    message.innerHTML = Fmessage
})

clear.addEventListener('click', ()=>{
    message.innerHTML = ''
    form.forEach(function(list){
        list.value = ""
    })

    // for(i=0; i <= form.length; i++){
    //     form[i].value = ''
    // }
})