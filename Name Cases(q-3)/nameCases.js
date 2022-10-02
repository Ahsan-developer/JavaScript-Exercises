const prompt = require('prompt-sync')() // this library for get input inside the vscode terminal.
const name = prompt('Please enter your name\t')
console.log(name.toLowerCase(), 'lowerCaseName')
console.log(name.toUpperCase(), 'uperCaseName')
console.log(
  name.toLowerCase().replace(/b\w/g, (s) => s.toUpperCase()),
  'titleCaseName',
)
// "/" use for start and end of regular expersions
// "\b" use for word start boundary
// "\w" using for match word
// "g" using for global search
