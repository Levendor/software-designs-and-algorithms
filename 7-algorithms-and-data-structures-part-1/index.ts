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
  new Edge(vertices[1], vertices[3], 6),
  new Edge(vertices[1], vertices[2], 5),
];
const graph: IWeightedGraph<string> = new WeightedGraph();

vertices.forEach(vertex => graph.addVertex(vertex.key));
edges.forEach(edge => graph.addEdge(edge.from.key, edge.to.key, edge.weight));

console.log(graph);
