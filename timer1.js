/*

Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

Example usage:

node timer1.js 10 3 5 15 9 
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

*/

const nodeArgs = process.argv.slice(2).filter(elm => parseInt(elm));

const beeper = (beeps) => {
  for (const beep of beeps) {
    setTimeout(() => { process.stdout.write('\x07'); }, beep * 1000);
  }
}

beeper(nodeArgs);

/*
Testing

Edge Cases
With every software project, developers need to think about edge cases.

Confirm that our script can handle some common edge cases.

For this app, we can think of at least these three:

No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/