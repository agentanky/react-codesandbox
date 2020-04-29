class Node{
	constructor(value){
		this.val = value;
		this.leftChild = null;
		this.rightChild = null
	}
}

class BinarySearchTree{
	constructor(){

	}


	insert(newValue){
		if (this.root == null){
			this.root = new Node(newValue)
			return;
		}

		let currentNode = this.root
		let parent

		while(currentNode){
			parent = currentNode
			if(newValue < currentNode.val){
				currentNode = currentNode.leftChild
			}else {
				currentNode = currentNode.rightChild
			}
		}

		if (newValue < parent.val){
			parent.leftChild = new Node(newValue)
		}else{
			parent.rightChild = new Node(newValue)
		}


	}

	findMin(){
		// also check root right and left child. in this case, i'm only concerned with left
		if (this.root == null){
			return this.root.val
		}

		let currentNode = this.root;
		let parent;
		while(currentNode){
			parent = currentNode
			currentNode = currentNode.leftChild

		}
		return parent.val
	}
	
	findKth(k){
		let counter = 0
		if (this.root == null){
			return this.root.val
		}
		let currentNode = this.root
		
	

    function reverseInOrder(currentNode, k){
    	
		if (currentNode){
			let rightChild = reverseInOrder(currentNode.rightChild, k)

			if (rightChild){
				if (counter == k){
					return rightChild;
				}
			}else {
				counter++
				if (counter == k){
					return currentNode.val;

				}
				
			}
			return reverseInOrder(currentNode.leftChild, k)
		}
	}

	return reverseInOrder(currentNode.rightChild, k)
}
}


let bst = new BinarySearchTree()

bst.insert(6)
bst.insert(4)
bst.insert(9)
bst.insert(2)
bst.insert(5)
bst.insert(8)
bst.insert(12)
bst.insert(10)
bst.insert(14)
console.log(JSON.stringify(bst, null, 2))
console.log(bst.findMin())
console.log(bst.findKth(3))







