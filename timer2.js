/*
Challenge
Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand".

Implement a new timer which behaves in the following way:

- The user can press b and it should beep right away

- The user can input any number from 1 to 9 and it should
  - immediately output "setting timer for x seconds...",
  - and beep after that number of seconds has passed

- The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

- Remember to work on and manually test each feature above incrementally, instead of trying to implement all of the features in one go.
*/

// const nodeArgs = process.argv.slice(2).filter(elm => parseInt(elm));

// INIT user inputs
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// Rules of the program
const ruleBook = {
  "b": "beep immediately",
  "1-9": "beep after ",
  "Ctrl+C": "exit"
};

// Function to print the rules of the program for the user
const printRules = (rules) => {
  for (const key in rules) {
    console.log(`  • ${key} to ${rules[key]}`);
  }
};

// Spinner Implementation to spice up the timer
const spinner2 = () => {
  const sprites =
  [ '|'
  , '/'
  , '-'
  ,'\\'
  , '|'
  ]
  for (let rad = 0; rad < sprites.length; rad++) {
    setTimeout(() => { process.stdout.write(`\r${sprites[rad]}    `); }, rad * 200);
  }
}

const spinnerCaller = (spinnerFunc, cycles) => {
  for (let cyc = 0; cyc < cycles; cyc++) { setTimeout(() => { spinnerFunc(); }, cyc * 1000); }
}

// Function that beeps as many times as you request
const beeper = (beeps) => {
  for (const beep of beeps) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log('\rboop!')
    }, beep * 1000);
  }
};

// stdin
stdin.on('data', (data) => {
  if (data === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  if (data === "b") {
    beeper([0]);
  }
  if (0 < parseInt(data) < 10 && !Number.isNaN(parseInt(data))) {
    console.log(`\rsetting timer for ${data} seconds...`);
    beeper([data]);
    spinnerCaller(spinner2, data);
  }
});

console.log("Welcome to Beepertown");
printRules(ruleBook);
console.log("Press if you dare")