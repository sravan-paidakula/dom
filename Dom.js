function clickme(){
    let button=document.getElementById("text")
    button.innerText="Welcome"
    button.style.color="red";
}
function clickhere(){
    let result=document.getElementsByTagName("h1")
    result[0].innerHTML="Dom"
}

function main(){
    let element=document.getElementsByClassName("one")
    element[0].innerHTML="Contact"
    element[0].style.color="blue"
}
function test(){
    let content=document.getElementById("class")
    content.innerText="Hello Welcome"
    content.style.color="yellow"
}
function boxes(){
    let text=document.getElementById("container")
text.style.flexDirection="column"
}

function platform(){
    let text1=document.getElementById("attributes")
    text1.innerText="Test"
    text1.style.color="blue"
    text1.style.backgroundColor="pink"
}

function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs+' :';
    minutes.innerText = mins +' :';
    seconds.innerText = secs +' :';
    am.innerText = am_pm;
}
setInterval(clock,1000);



function time(){
    var result1 = document.getElementById("select");
    var result2 = result1.value;
    document.getElementById("span").innerText=result2;
}