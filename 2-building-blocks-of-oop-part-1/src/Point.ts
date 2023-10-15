export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);
  constructor(x?: number, y?: number) {
    this.x = x ?? 0;
    this.y = y ?? 0;
  }

  toString = () => `(${this.x}, ${this.y})`;

  distance(): number;
  distance(point: Point): number;
  distance(x: number, y: number): number;
  distance(arg1?: Point | number, arg2?: number) {
    const calculateVectorDistance = (firstPoint: [number, number], secondPoint: [number, number]): number => {
      return Math.sqrt((secondPoint[0] - firstPoint[0]) ** 2 + (secondPoint[1] - firstPoint[1]) ** 2);
    };

    if (!arg1 && !arg2) {
      return calculateVectorDistance([this.x, this.y], [0, 0]);
    }
    if (arg1 && arg1 instanceof Point) {
      return calculateVectorDistance([this.x, this.y], [arg1.x, arg1.y]);
    }
    if (arg1 && typeof arg1 === "number" && arg2 && typeof arg2 === "number") {
      return calculateVectorDistance([this.x, this.y], [arg1, arg2]);
    }
  }
}
