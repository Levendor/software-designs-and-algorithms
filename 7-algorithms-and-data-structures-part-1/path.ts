import { IPath } from "./interfaces";
import { Vertex } from "./vertex";

export class Path {
  constructor(public source: Vertex, public distance: number = 0, public path: Map<Vertex, number> = new Map()) {
    this.addNode(source, 0);
  }
  
  addNode(vertex: Vertex, weight: number): Path {
    this.path.set(vertex, weight);
    this.distance += weight;
    return this;
  }
  
  noWay(): Path {
    this.distance = Infinity;
    return this;
  }
  
  interrupts(): Path {
    this.path = new Map();
    this.distance = Infinity;
    return this;
  }
  
  atTheEnd() {
    const path: IPath = {
      path: [],
      distance: this.distance,
    };
    this.path.forEach((weight, vertex) => {
      path.path.push(vertex.key);
    });
    return path;
  }
}