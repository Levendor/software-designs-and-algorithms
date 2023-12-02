import { Vertex } from "./vertex";

export interface IWeightedGraph<T> {
  addVertex(key: T): void;
  addEdge(vertex1: T, vertex2: T, weight: number): void;
  findAllShortestPaths(vertex: T): Record<string, IPath>;
  findShortestPath(vertex1: T, vertex2: T): IPath;
}

export interface IPath {
  path: string[];
  distance: number;
}

export interface IDijkstra<T> {
}
