import { Edge } from "./edge";
import { IWeightedGraph } from "./interfaces";
import { Vertex } from "./vertex";
import { WeightedGraph } from "./weighted-graph";

const vertices = [
  new Vertex('1'),
  new Vertex('2'),
  new Vertex('3'),
  new Vertex('4'),
  new Vertex('5')
];
const edges = [
  new Edge(vertices[0], vertices[3], 3),
  new Edge(vertices[0], vertices[1], 5),
  new Edge(vertices[0], vertices[2], 4),
  new Edge(vertices[3], vertices[1], 6),
  new Edge(vertices[1], vertices[2], 5),
];
const graph: IWeightedGraph<Vertex> = new WeightedGraph();

vertices.forEach(vertex => graph.addVertex(vertex));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

console.log(graph.findShortestPath(vertices[3], vertices[2]));
console.log(graph.findShortestPath(vertices[0], vertices[4]));
console.log(graph.findShortestPath(vertices[0], vertices[0]));
// console.log(graph.findShortestPath(vertices[2], vertices[3]));
// console.log(graph.findShortestPath(vertices[0], vertices[4]));

console.log(graph.findAllShortestPaths(vertices[2]));
