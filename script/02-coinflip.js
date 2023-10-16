var coinFlip, result, choice;

choice = window.prompt("Enter your choice: Heads or Tails");
coinFlip = Math.floor(Math.random() * 10);
(coinFlip <= 5) ? result = "Heads" : result = "Tails"

    if (choice === result) {
        window.alert("The flip was " + result + " and you chose " + choice + "...you win!");
    } else {
        window.alert("The flip was " + result + " but you chose " + choice + "...you lose!");
    }