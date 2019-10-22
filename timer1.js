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

const nodeArgs = process.argv.slice(2);

console.log(nodeArgs);