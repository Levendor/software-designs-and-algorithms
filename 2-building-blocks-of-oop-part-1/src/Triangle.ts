import { Shape } from "./Shape";
import { Point } from "./point";

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super([point1, point2, point3], color, filled);
    }
    
    toString(): string {
        return `Triangle[v1=${this.points[0].toString()},v2=${this.points[1].toString()},v3=${this.points[2].toString()}]`;
    }
    
    getType(): string {
        const firstSide = this.points[0].distance(this.points[1]).toFixed(3);
        const secondSide = this.points[1].distance(this.points[2]).toFixed(3);
        const thirdSide = this.points[2].distance(this.points[0]).toFixed(3);
        const checkEquilateral = () => {
            return firstSide === secondSide && firstSide === thirdSide;
        }
        const checkIsosceles = () => {
            return firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide;
        }
        if (checkIsosceles()) {
            if (checkEquilateral()) {
                return "equilateral triangle";
            } else {
                return "isosceles triangle";
            }
        } else {
            return "scalene triangle";
        }
    }
}