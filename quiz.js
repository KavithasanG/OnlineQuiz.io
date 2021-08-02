var sec = 30;
var time = setInterval(myTimer, 1000);

function myTimer() {
    let min=Math.floor(sec/60);
    var seconds=sec%60;
    document.getElementById('timer').innerHTML = min + " :mins " + seconds +" :seconds left"  ;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!  you're test has been submitted succesfully");
        check();
    }
}

function check(){
    var c=0;

    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;

    if(q1=="answer1") {c++};
    if(q2=="answer2") {c++};
    if(q3=="answer3") {c++};
    if(q4=="answer4") {c++};

    //document.write("<span style=\"color:green;font-size: 1em; font-family:arial, helvetica, sans-serif;\">(I see you have been here " + visits + " times.)<\/span>");
    document.write("<h1>your score is :<h1> "+c);
    //document.write("color:mediumblue">"Hello World!"); 
    //document.getElementById("answer").innerHTML=c;
}
