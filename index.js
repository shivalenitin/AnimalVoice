if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
function ready(){
    var noOfButton=document.querySelectorAll('.key').length
    for(var i=0;i<noOfButton;i++){
       document.querySelectorAll('.key')[i].addEventListener('click',handleClicked)
    }
}

function handleClicked(event)
{
    /*alert("I am gone clicked"+ this.innerText);*/
    alert("i clicked on: "+event.target.innerText)
    var skey=this.innerText;
    alert(skey);
    switch(skey){
        case"Cat":var audio=new Audio("Sounds/cat.mp3");
                   audio.play();
                   break;
        case"Lion":var audio=new Audio("Sounds/lion.mp3");
                   audio.play();
                   break;
        case"Dog": var audio=new Audio("Sounds/dog.mp3");
                   audio.play();
                   break;
        case"Horse": var audio=new Audio("Sounds/horse.mp3");
                   audio.play();
                   break;
    }
}