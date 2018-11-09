const Stack = require('./stack');
const { peek } = require('./stack-helpers');

function validParentheses(s){
  const stack = new Stack();

  let index = 0;
  for(let c of s){

    if(c === '('){
      stack.push(index);
    } else {
      if(c === ')'){
        if(peek(stack) === null){
          console.log(`Character at index ${index} is an invalid closing parentheses.`);
          return false;
        } else {
          stack.pop();
        }
      }
    }
    index++;
  }
  if(peek(stack) !== null){
    console.log(`Character at index ${stack.pop()} is an extra opening parentheses.`);
    return false;
  } else {
    return true;
  }
}
module.exports = validParentheses;

validParentheses('(()');
validParentheses('(()))');
validParentheses('( 8 + 5 ) + ( 9 + 5 ))');