const idButton = document.getElementById("id-button");
const pwButton = document.getElementById("pw-button");
const mainButton = document.getElementById("main-button");
const greeting = document.getElementById("greeting");

function open(){
    alert(`HeLLoOoOoOo`);
    greeting.style.visibility = "visible";
    mainButton.innerHTML = "닫기";
}

function close(){
    alert("ByYyYye");
    greeting.style.visibility = "hidden";
    mainButton.innerHTML = "열기"
}

function needInput(input){
    alert(`${input}를 입력하세요`);
}

mainButton.addEventListener('click', function(event){
    if(mainButton.innerHTML === "열기"){
        open();
    }
    else{
        close();
    }
        
});

idButton.addEventListener('click', function(event){
    needInput("아이디");
});

pwButton.addEventListener('click', function(event){
    needInput("비밀번호");
});
