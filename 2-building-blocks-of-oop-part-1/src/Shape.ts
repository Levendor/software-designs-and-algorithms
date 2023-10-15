import { Point } from "./point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points: Point[], color: string = "green", filled: boolean = true) {
    if (!Array.isArray(points) || points.length < 3) throw Error("Not enough points!");

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString() {
    return `A Shape with color of ${this.color} and ${this.filled ? "filled" : "not filled"}. Points: ${this.points
      .map((point) => point.toString())
      .join(", ")}.`;
  }

  getPerimeter() {
    const perimeterObject = this.points.reduce(
      (perimeterMedia, point) => {
        perimeterMedia.perimeter += point.distance(perimeterMedia.currentPoint);
        perimeterMedia.currentPoint = point;
        return perimeterMedia;
      },
      {
        perimeter: 0,
        currentPoint: this.points[this.points.length - 1],
      }
    );
    return perimeterObject.perimeter;
  }

  abstract getType(): string;
}
