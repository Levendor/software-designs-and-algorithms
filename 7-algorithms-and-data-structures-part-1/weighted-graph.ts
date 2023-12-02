import { IPath, IWeightedGraph } from "./interfaces";
import { Path } from "./path";
import { Vertex } from "./vertex";

export class WeightedGraph implements IWeightedGraph<Vertex> {
  private adjacencyList: Map<Vertex, Map<Vertex, number>>;
  
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(node: Vertex): void {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, new Map);
    }
  }
  
  addEdge(from: Vertex, to: Vertex, weight: number): void {
    const node1 = this.adjacencyList.get(from);
    if (node1) {
      node1.set(to, weight);
    }
    const node2 = this.adjacencyList.get(to);
    if (node2) {
      node2.set(from, weight);
    }
  }
  
  private getLastClosestNode(distances: Map<Vertex, Path>, visited: Vertex[]): Vertex | null {
    let shortestDistance = Infinity;
    let closest: Vertex | undefined;
    distances.forEach((path, node) => {
      const distance = path.distance;
      if (distance < shortestDistance && !visited.includes(node)) {
        shortestDistance = distance;
        closest = node;
      }
    })
    return closest ?? null;
  }
  
  private allShortestPaths(source: Vertex): Map<Vertex, Path> {
    const distances: Map<Vertex, Path> = new Map();
    const neighbors = this.adjacencyList.get(source);
    const visited: Vertex[] = [];

    this.adjacencyList.forEach((edges, node) => {
      if (node === source) {
        distances.set(node, new Path(source));
      } else if (neighbors?.has(node)) {
        distances.set(node, new Path(source).addNode(node, neighbors.get(node)!));
      } else {
        distances.set(node, new Path(source).noWay());
      }
    });
    let lastClosestNode = this.getLastClosestNode(distances, visited);
    while(lastClosestNode) {
      const lastPath = distances.get(lastClosestNode);
      const lastNeighbors = this.adjacencyList.get(lastClosestNode);
      lastNeighbors?.forEach((weight, neighbor) => {
        let newDistance = lastPath!.distance + lastNeighbors.get(neighbor)!;
        if (newDistance < distances.get(neighbor)!.distance) {
          distances.set(neighbor, lastPath!.addNode(neighbor, weight));
        }
      })
      visited.push(lastClosestNode);
      lastClosestNode = this.getLastClosestNode(distances, visited);
    }
    return distances;
  }
  
  findShortestPath(source: Vertex, destination: Vertex): IPath {
    const distances = this.allShortestPaths(source);
    const pathToDestination = distances.get(destination);
    return Number.isFinite(pathToDestination?.distance) ? pathToDestination!.atTheEnd() : new Path(source).interrupts().atTheEnd();
  }
  
  findAllShortestPaths(source: Vertex): Record<string, IPath> {
    const distances = this.allShortestPaths(source);
    const paths: Record<string, IPath> = {}
    let i = 0;
    distances.forEach((path) => {
      paths[String(++i)] = Number.isFinite(path?.distance) ? path!.atTheEnd() : new Path(source).interrupts().atTheEnd();
    })
    return paths;
  }
}
