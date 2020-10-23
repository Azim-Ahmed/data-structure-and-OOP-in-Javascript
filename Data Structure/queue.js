class Queue {
    constructor(){
        this.queue= []
    }
    enqueue(item){
        this.queue.push(item)
    }
    dequeue(item){
        if(this.queue.length){
          return  this.queue.shift(item)
        }
       
    }
}

const premiks = new Queue()
premiks.enqueue('Razib')
premiks.enqueue('box1')
premiks.enqueue('box2')
premiks.enqueue('box3')
premiks.enqueue('box4')

console.log(premiks.queue);

const bolod = premiks.dequeue("2")
console.log(bolod);
console.log(premiks.queue);


