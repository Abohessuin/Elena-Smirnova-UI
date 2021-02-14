


const countDown = ()=>{
    var countDownDate = new Date("March 14, 2021 16:45:00").getTime();
    
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    var daysDiv=document.querySelector(".days");
        
    var hoursDiv=document.querySelector(".hours");
        
    var minutesDiv=document.querySelector(".mints");
        
    var secondsDiv=document.querySelector(".seconds");
    
    daysDiv.innerHTML=days;
    hoursDiv.innerHTML=hours;
    minutesDiv.innerHTML=minutes;
    secondsDiv.innerHTML=seconds;
   
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)
}





countDown();