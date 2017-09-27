var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(option != 'fight bears'){
  ask.keyInSelect(options, "What would you like to do today?: ");
  if(option = 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet, but no one complements it.");
  } else {
    console.log("You shoot guns. It makes you feel powerful. Finally you have control over something in your life.");
  }
}

console.log("You fought a bear and got eaten!");
