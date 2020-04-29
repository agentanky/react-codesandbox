let array = [
[1,2,3,4]
[5,6,7,8]
[9,10,11,12]
[13,14,15,16]

]

let result = []

class MinHeap{
	constructor(){
		this.storage = []
	}

	insert(obj){
		this.storage.push(obj)
		bubbleUp()
	}
}

bubbleUp(){
	let child = this.storage.length - 1
	let parent = this.getParent(child)

	if (parent < 0){return}{
		while(this.storage[child].val < this.storage[parent].val){
			this.swap(child, parent)
			child = parent
			parent = this.getParent(child)
			if (parent < 0){
				break
			}
		}
	}


	bubbleDown(){
		let parent = 0;
		let child = this.getChild(parent)

		if (child == null){return}
			while(this.storage[child].val < this.storage[parent].val){
				this.swap(parent, child)
				parent = child
				child = this.getChild(parent)
				if (child == null){
					break
				}
			}
	}

	getParent(child){
		let parent
		if (child % 2 == 0){
			parent = (child - 2) / 2
		}else {
			parent = (child - 1) / 2
		}
		return parent
	}

	swap(index1, index2){
		[this.storage[index1], [this.storage[index]]= [this.storage[index2], [this.storage[index1]]
	}

remove(){
	let minObj = null
	this.swap(0, this.storage.length - 1)
	bubbleDown()
	return minObj
}

getChild(parent){
	let leftChild = (parent * 2) + 1
	let rightChild = (parent *2) + 2

	let minChild = null

	if (this.storage[leftChild] != undefined){
		if(this.storage[rightChild] != undefined){
			if (this.storage[leftChild].val < this.storage[rightChild].val){
				return leftChild
			}else{
				return rightChild
			}
		}

		return leftChild
	}

	return minChild

}
}













}


