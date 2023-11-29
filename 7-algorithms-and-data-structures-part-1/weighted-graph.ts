import { IWeightedGraph } from "./interfaces";

export class WeightedGraph implements IWeightedGraph<string> {
  private adjacencyList: Map<string, { vertex: string, weight: number }[]>;
  
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(key: string): void {
    this.adjacencyList.set(key, []);
  }
  
  addEdge(vertex1: string, vertex2: string, weight: number): void {
    const node1 = this.adjacencyList.get(vertex1);
    if (node1) { 
      node1.push({ vertex: vertex2, weight });
      const node2 = this.adjacencyList.get(vertex2);
      if (node2) {
        node2.push({ vertex: vertex1, weight });
      } else {
        throw Error('One of given vertices is not present in the graph!');
      };
    } else {
      throw Error('One of given vertices is not present in the graph!');
    };
  }
}
