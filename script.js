const button = document.getElementById("button");
const greeting = document.getElementById("greeting");
        
button.addEventListener('click', function(event){
    if(button.innerHTML === "열기"){
        alert("HeLLoOoOoOo");
        greeting.style.visibility = "visible";
        button.innerHTML = "닫기"
    }
    else{
        alert("ByYyYye");
        greeting.style.visibility = "hidden";
        button.innerHTML = "열기"
    }
        
});