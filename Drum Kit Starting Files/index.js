//for mouseclick
var l=document.querySelectorAll(".drum").length;
for(i=0;i<l;i++)
{    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerhtml=this.innerHTML;
        presseffect(buttonInnerhtml);
        makesound(buttonInnerhtml);
        
    });

}
//for keyboard press
document.addEventListener("keydown",function(e){
    var keypressed=e.key;
    presseffect(keypressed);
    makesound(keypressed);
});

function makesound(key)
{
    switch(key)
    {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;
        case "a" :
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();  
            break;
        case "s" :
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();  
            break;
        case "d" :    
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();  
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();  
            break;
        case "k":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();  
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();  
            break;
        default:
            console.log(buttonInnerhtml);
            alert('wrong keypress');
    }
}
function presseffect(currentkey)
{
    var press=document.querySelector("."+currentkey);
    press.classList.add("pressed");
    setTimeout(function(){
        press.classList.remove("pressed");
    },100);
}