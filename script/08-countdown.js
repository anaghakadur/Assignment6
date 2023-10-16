var number = parseInt(window.prompt("Enter a number greater than zero to countdown"));

if(!isNaN(number)) {
  var currentNum = number;
  var countDown = setInterval(myTimer, 1000);
}

function myTimer() {
	if(currentNum == 0) {
    clearInterval(countDown);  
  }
  document.getElementById('timer').innerText = currentNum--;
}