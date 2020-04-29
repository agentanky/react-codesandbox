class Stack{
	constructor(value){
		this.items = []
	}
	insert(value){
		this.items.push(value)
	}
	remove(){
		this.items.pop()
	}
	isEmpty(){
		return this.items.length == 0;
	}
	size(){
		return this.items.length
	}
}


let myStack1 = new Stack()
let myStack2 = new Stack()

myStack.insert(5)
myStack.insert(6)
myStack.insert(7)
myStack.insert(8)
console.log(myStack)
myStack.remove()
console.log(myStack)
console.log(myStack.isEmpty())
console.log(myStack.size())
console.log(myStack)






