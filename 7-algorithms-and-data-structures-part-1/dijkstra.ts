// import { IDijkstra, IPath, IWeightedGraph } from "./interfaces";

// export class Dijkstra<T> {
//   constructor(private grapth: IWeightedGraph<T>) {}
  
//   // findShortestPath(vertex1: T, vertex2: T): IPath {
    
//   // };

//   // findAllShortestPaths(vertex: T): Record<string, IPath> {
    
//   // };
  
//   initSingleSource(G, s) {
//     for (let vertex of G) {
//       v.d = Number.MAX_SAFE_INTEGER;
//       v.p = null;
//     }
  
//     s.d = 0;
//   } 
  
//   relax(u, v, w) {
//     if (v.d > u.d + w(u, v)) {
//       v.d = u.d + w(u, v);
//       v.p = u;
//     }
//   }
// }