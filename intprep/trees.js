class Node {
	constructor(value){
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

class BinarySearchTree{
	constructor(){
		
	}

insert(value){
	if(this.root === null){
		this.root = new Node(value)
		return
	}

	let currentNode = this.root;
	let parent;

	while(currentNode){
		parent = currentNode
		if (value < currentNode.value){
			currentNode = currentNode.leftChild
		}else {
			currentNode = currentNode.rightChild
		}
	}

	if (value < parent.val){
		parent.leftChild = new Node(value)
	}else{
		parent.rightChild = new Node(value)
	}

}

}


let bst = new BinarySearchTree()
bst.insert(4)
console.log(bst)

