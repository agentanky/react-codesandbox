class Node {
	constructor(value){
		this.value = value;
		this.nextElement = null;
	}
}
class LinkedList{
	constructor(){
		this.head = null;
		this.tail = null;
		this.length = 0
	}
		insertAtHead(value){
		let newNode = new Node(value)
		this.head = newNode;
		this.tail = newNode;
		this.length++
		}
		insertAtTail(value){
			let currentNode = this.head
			let newNode = new Node(value)
			while(currentNode.nextElement != null){
				currentNode = currentNode.nextElement
			}
			currentNode.nextElement = newNode;
			this.tail = newNode;
			this.length++
		}
}

let ll = new LinkedList()

ll.insertAtHead(3)

ll.insertAtTail(4)
ll.insertAtTail(6)
console.log(ll)


