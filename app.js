var userValue = document.getElementById('user');
var email = document.getElementById('email');
var form = document.getElementById('startQuiz');
var start = document.getElementById('start');
var body = document.getElementById('body');
var select = document.getElementById('select');
function submit() {

    if (userValue.value == '' || email.value == '') {
        alert('Please ! complete your form');
    } else {
        start.classList.remove('hide');
        form.classList.add('hide');
        firstName.innerHTML = userValue.value;
        userEmail.innerHTML = email.value;
    }
}
function startQuiz(){
    start.classList.add('hide');
    select.classList.remove('hide');
}
var quesArr = [
    {
        ques: "What is 855x3 ?",
        option: {
            a: '2,555',
            b: '2,463',
            c: '2,565',
        },
        ans: '2,565'
    },
    {
        ques: "What is 60+60 ?",
        option: {
            a: '100',
            b: '130',
            c: '120',
        },
        ans: '120'
    },
    {
        ques: "What is 90x1 ?",
        option: {
            a: '160',
            b: '90',
            c: '150',
        },
        ans: '90'
    }
]
var question = document.getElementById('question');
var option = document.getElementsByClassName('option');
var next = document.getElementById('next');
var final = document.getElementById('final');
var result = document.getElementById('result');
var points = document.getElementById('points');
var count = 0;
function displayQues() {
    question.innerHTML = quesArr[count].ques;
    option[0].innerHTML = quesArr[count].option.a;
    option[1].innerHTML = quesArr[count].option.b;
    option[2].innerHTML = quesArr[count].option.c;
}
displayQues();
function nextQues() {
    if (!(count == quesArr.length- 1)) {
        count++
        displayQues()
    } else {
        final.classList.remove('hide');
        next.classList.add('hide');
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.remove('disable');
        option[i].classList.remove('wrong');
        option[i].classList.remove('correct');
    }
}
for (var i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "work(this)")
}
var score = 0;
var counter = 0;
function work(a) {
    
    if (a.innerHTML === quesArr[counter].ans) {
        a.classList.add('correct')
        console.log(a.innerHTML);
        console.log(quesArr[counter].ans);
        score = score+10;
        console.log(score);
    } else {
        a.classList.add('wrong')
        console.log(a.innerHTML);
        console.log(quesArr[counter].ans);
    }
    for (var i = 0; i < option.length; i++) {
        option[i].classList.add('disable')
    }
    counter++
}
// result
function finalResult(){
    result.classList.remove('hide');
    body.classList.remove('hide');
    if(score == 30){
        alert("Your score is 30 out of 30!")
    }else{
        score == 20;
        alert("Your score is 30 out of 20!")
    }

}