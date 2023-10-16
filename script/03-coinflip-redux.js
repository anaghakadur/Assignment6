var coinFlip;

for(var i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * Math.floor(2)); //Returns either 0 or 1
  if(coinFlip) {
    document.write("<br>Tails");
  }
  else {
    document.write("<br>Heads");
  }
}