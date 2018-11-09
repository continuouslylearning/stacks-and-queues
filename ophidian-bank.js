const Queue = require('./queue');

function teller(queue){
  console.log('The teller at Ophidian Bank started serving the queue')
  while(!queue.isEmpty()){
    const customer = queue.dequeue();
    const random = Math.random();
    if(random < .25){
      queue.enqueue(customer);
      console.log(`${customer} was sent back to the end of the line`);
    } else {
      console.log(`${customer} was served`);
    }
  }
  console.log('The teller served the entire queue');
}

const bankLine = new Queue();

const customers = [ 
  'Aaron', 'Timothy', 'Shane', 'Alec', 'Sean', 'Alex', 
  'Nikolas', 'Cameron', 'Morgan', 'Chelsea', 'Mathew', 
  'Colin', 'Kent', 'Gabriel', 'Joe', 'Janet'
];

customers.forEach(customer => {
  bankLine.enqueue(customer);
});

teller(bankLine);