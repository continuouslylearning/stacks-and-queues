const Queue = require('./queue');

function pairDancers(men, women){

  while(!men.isEmpty() && !women.isEmpty()){
    const male = men.dequeue();
    const female = women.dequeue();
    console.log(`The female dancer is ${female} and the male dancer is ${male}.`);
  }

  const { gender, spares } = men.isEmpty() ? { gender: 'female', spares: women } : { gender: 'male', spares: men };
  console.log(`There are ${spares.size()} ${gender} dancers waiting to dance`);
}

if(require.main === module){
  const women = new Queue();
  const men = new Queue();
  [ 'Jane', 'Madonna', 'Beyonce' ].forEach(female => {
    women.enqueue(female);
  });
  [ 'Frank', 'John', 'Sherlock', 'David', 'Christopher'].forEach(male => {
    men.enqueue(male);
  });
  pairDancers(men, women);
}