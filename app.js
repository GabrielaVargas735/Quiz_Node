console.log('process.argv', process.argv)
let myArgv = process.argv.slice(2);
const num = require('./addition');
console.log(num.Numbers(myArgv[19]))
