const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}


console.log(XO('xo')) //> true
console.log(XO('xxOo')) //> true
console.log(XO('xxxm')) //> false
console.log(XO('Oo')) //> false
console.log(XO('ooom')) //> false