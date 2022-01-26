let runnerNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerage = 18;

if (runnerage >= 18 && registeredEarly) {
  runnerNumber += 1000
  console.log(`Runner: ${runnerNumber} - Your race starts at 9:30`);
} else if (runnerage >= 18 && !registeredEarly) {
  console.log(`Runner: ${runnerNumber} - Your race starts at 11:00`);
} else if (runnerage < 18) {
  console.log(`Runner: ${runnerNumber} - Your race starts at 12:30`);
} else {
  console.log("Error!")
}
