function peek(queue){
  return queue.first ? queue.first.value : null;
}

function display(queue){
  let temp = queue.first;
  while(temp){
    console.log(temp.value);
    temp = temp.next;
  }
}

module.exports = { 
  peek, 
  display
};