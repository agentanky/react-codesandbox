class Graph {
  constructor() {
    this.storage = {};
  }

  addVertex(val) {
    if (this.storage[val]) return false;
    this.storage[val] = [];
    return true;
  }

  addEdge(startV, endV) {
    this.storage[startV].push(endV);
  }

  neighbors(vertex) {
    return this.storage[vertex];
  }

  removeVertex(vertex) {
    if (this.storage[vertex]) return false;

    /* REMOVE ALL REFERENCES OF THAT VERTEX */
    for (let item in this.storage) {
      let edges = this.storage[item];
      let index = edges.index(vertex);
      if (index >= 0) {
        edges.splice(index, 1);
      }
    }

    delete this.storage[vertex];
    return true;
  }

  removeEdge(startV, endV) {
    if (this.storage[startV]) return false;

    /* REMOVE ALL REFERENCES OF THAT VERTEX */

    let edges = this.storage[startV];
    let index = edges.index(vertex);
    if (index >= 0) {
      edges.splice(index, 1);
    }
    return true;
  }
}

let graph = new Graph();
let vertices = [1, 2, 3, 4, 5, 6, 7, 8];
let edges = [[1, 2], [1, 3], [2, 4], [3, 2], [3, 4], [3, 5], [4, 5], [5, 7], [5, 6], [5, 8], [6, 8]];

vertices.forEach(val => {
  graph.addVertex(val);
});

edges.forEach(e => {
  graph.addEdge(e[0], e[1]);
});

console.log(graph)