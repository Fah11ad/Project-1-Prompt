var flag = true 
var arr = [
    {q: "7 + 5 = 12", a:"true"},
    {q: "3 + 8 = 9", a: "false"},
    {q: "5 + 4 = 9", a: "true"},
    {q: "4 + 7 = 11", a: "true"},
    {q: "9 + 5 = 13", a: "false"},
    {q: "3 + 7 = 10", a: "true"},
    {q: "8 + 5 = 13", a: "true"},
    {q: "5 + 6 = 12", a: "false"},
    {q: "2 + 7 = 9", a: "true"},
    {q: "7 + 9 = 15", a: "false"},
    {q: "6 + 5 = 13", a: "false"},
    {q: "4 + 3 = 7", a: "true"},
    {q: "7 + 8 = 15", a: "true"},
    {q: "6 + 8 = 14", a: "true"},
    {q: "9 + 12 = 18", a: "false"},
    {q: "7 + 4 = 13", a: "false"}, 
    {q: "8 + 9 = 16", a: "false"}, 
    {q: "6 + 9 = 15", a: "true"}, 
    {q: "3 + 5 = 7", a: "false"}, 
    {q: "9 + 9 = 18", a: "true"}, 

];
var $equation = document.querySelector("h2");
var $startDiv = document.getElementsByClassName("start")
var $start = document.querySelector("h1")
var $correct = document.querySelector(".correct");
var $wrong = document.querySelector(".wrong");
var seconds = 10;
var score = 0;
let count = 0;
document.querySelector(".timer")
document.querySelector(".score").innerHTML = "Score: " + score


// START the Game
$($start).click(function(){
   $equation.textContent = arr[count].q;
   $($startDiv).hide();
   myTimer();  

})    
// Click buttons
  $( ".click" ).click(function() {
    console.log($(this).val())
    if ($(this).val() == arr[count].a){
        score++;
        $(".score").text("Score: " + score);
        seconds+=2;
        $("timer").text(seconds);
        count++;
        $($equation).text(arr[count].q)
        time = time+10
        $(".bg-success").text(seconds--);
    }
        else{
            $($equation).text("Game Over")
            Swal.fire(
                'Game Over',
                'Your score is ' + score,
              )
            clearInterval(myTimer);
            seconds = 0; 
            flag = false;
            setTimeout(() =>{
                location.reload();
              }, 3000);
        }
  });
  
  var time = 100
$('.bg-success').attr("style" , `width: ${time}%`)

// Count Down Timer
function myTimer(){
    var timeCountDown = setInterval(function(){
        $(".bg-success").text(seconds--);
        $('.bg-success').attr("style" , `width: ${time}%`)
        time = time - 10
        
        if(seconds < 0) {
            clearInterval(timeCountDown);
            if (flag){
            Swal.fire(
                'Game Over',
                'Your score is ' + score,
              )
              setTimeout(() =>{
                location.reload();
              }, 3000);   
        }  
    }
    },800) 
}
