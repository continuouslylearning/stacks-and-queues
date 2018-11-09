const Stack = require('./stack');
const { peek } = require('./stack-helpers');

function isPalindrome(s){
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();
  let backwards = '';

  for(let c of s){
    stack.push(c);
  }

  while(!stack.isEmpty()){
    backwards += stack.pop();
  }

  return backwards === s;
}

module.exports = isPalindrome;

if(require.main === module){
  console.log(isPalindrome("dad"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("1001"));
  console.log(isPalindrome("Tauhida"));
}
