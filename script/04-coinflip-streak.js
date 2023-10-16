var coinFlip;

do {
  coinFlip = Math.floor(Math.random() * Math.floor(2)); //Returns either 0 or 1
  if(coinFlip) {
    document.write("Tails");
    console.log("Tails")
  }
  else {
    document.write("Heads");
    console.log("Heads")
  }
}while(!coinFlip);