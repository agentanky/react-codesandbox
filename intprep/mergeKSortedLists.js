let karray = [
  [5, 6, 8, 16],
  [3, 7, 12, 13],
  [1, 10, 11, 15],
  [5, 7, 9, 14]
]


let result = []
let tempArray = []

class MinHeap {
  constructor() {
    this.storage = []

  }

  insert(obj) {
    this.storage.push(obj)
    this.bubbleUp()
  }


  bubbleUp() {
    let child = this.storage.length - 1;
    let parent = this.getParent(child)

    if (parent < 0) { return }

    while (this.storage[child].val < this.storage[parent].val) {

      this.swap(child, parent)
      child = parent
      parent = this.getParent(child)
      if (parent < 0) {
        break
      }
    }
  }

  getParent(child) {
    let parent
    if (child % 2 === 0) {
      parent = (child - 2) / 2

    } else {
      parent = (child - 1) / 2
    }
    return parent
  }

  swap(index1, index2) {
    [this.storage[index1], this.storage[index2]] = [this.storage[index2], this.storage[index1]]

  }

  remove() {
    this.swap(0, this.storage.length - 1)
    let minObj = this.storage.pop()
    this.bubbleDown()
    return minObj


  }

  bubbleDown() {
    let parent = 0;
    let child = this.getChild(parent);

    if (child == null) { return }

    while (this.storage[child].val < this.storage[parent].val) {
      this.swap(parent, child)
      parent = child
      child = this.getChild(parent)
      if (child == null) {
        break
      }

    }

  }

  getChild(parent) {
    let rightChild = (2 * parent) + 2;
    let leftChild = (2 * parent) + 1;

    let minChild = null;
    if (this.storage[leftChild] != undefined) {
      if (this.storage[rightChild] != undefined) {
        if (this.storage[leftChild].val < this.storage[rightChild].val) {
          return leftChild
        } else {
          return rightChild
        }
      }
      return leftChild
    }

    return minChild
  }

}

const minHeap = new MinHeap();
debugger;
for (let i = 0; i < karray.length; i++) {
  minHeap.insert({
    'val': karray[i][0],
    'arrIndex': i,
    'elementIndex': 0
  })
}



while (minHeap.storage[0].val != Infinity) {
  debugger;
  let removeItemObj = minHeap.remove()
  
  result.push(removeItemObj.val);

  removeItemObj["elementIndex"] = removeItemObj["elementIndex"] + 1;

  if (removeItemObj["elementIndex"] < karray[removeItemObj["arrIndex"]].length) {
    removeItemObj["val"] = karray[removeItemObj["arrIndex"]][removeItemObj["elementIndex"]]
    
  }
  else {
    removeItemObj["val"] = Infinity;
    
  }


  minHeap.insert(removeItemObj);
}

console.log(result)



