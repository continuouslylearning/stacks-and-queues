function peek(stack){
  return stack.top ? stack.top.value : null;
}

function display(stack){
  let temp = stack.top;
  while(temp){
    console.log(temp.value);
    temp = temp.next;
  }
}

module.exports = {
  peek, 
  display
};