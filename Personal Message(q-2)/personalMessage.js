const prompt = require('prompt-sync')() // this library for get input inside the vscode terminal.
const name = prompt('Please enter your name\t')
console.log(
  `Hello ${name}, would you like to learn some related to Metaverse today ?`,
)
