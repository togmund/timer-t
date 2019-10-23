/*
Challenge
Instead of receiving all the timers ahead of time via process.argv, let's listen for user input and set timers "on demand".

Implement a new timer which behaves in the following way:

- The user can press b and it should beep right away

- The user can input any number from 1 to 9 and it should immediately output "setting timer for x seconds...", and beep after that number of seconds has passed

- The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating

- Remember to work on and manually test each feature above incrementally, instead of trying to implement all of the features in one go.
*/

const nodeArgs = process.argv.slice(2).filter(elm => parseInt(elm));

const beeper = (beeps) => {
  for (const beep of beeps) {
    setTimeout(() => { process.stdout.write('\x07'); }, beep * 1000);
  }
}

beeper(nodeArgs);