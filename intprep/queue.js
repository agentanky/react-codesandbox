class Queue{
	constructor(){
		this.items = []
	}
enqueue(value){
	this.items.push(value)
	}
dequeue(){
	if (this.items.length == 0){
		return null
	}else {
		this.items.shift()
	}
}
size(){
	return this.items.length
}
getFront(){
	if (this.items.length != 0){
		return this.items[0]
	}
}



}


let queue = new Queue()
queue.enqueue(5)
queue.enqueue(7)
console.log(queue)
queue.dequeue()
console.log(queue)
queue.enqueue(11)

console.log(queue)
console.log(queue.size())
console.log(queue.getFront())

