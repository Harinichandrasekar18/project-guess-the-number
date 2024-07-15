//math.random o to 1//0.1 to 0.99
var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById("btn").addEventListener("click",function(){
    attempt++;
    var guess=parseInt(document.getElementById("Guessinput").value);
    if(guess===random){
        display("Congratulations-"+ attempt);
        document.getElementById("btn").disabled=true;
    }
    else if(guess<random){
        display("Too low");
    }
    else if(guess>random){
        display("Too high");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;
}