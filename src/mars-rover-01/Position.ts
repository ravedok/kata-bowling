import { DirectionEnum } from "./Direction";

export class Position {
    private constructor(private readonly x: Coordinate, private readonly y: Coordinate) {                
    }

    static create(x: number = 0, y: number =  0) {
        return new Position(
            Coordinate.create(x), 
            Coordinate.create(y)
        );
    }

    public moveTo(direction: DirectionEnum) {

        if (direction === DirectionEnum.NORTH) {
            return new Position(this.x, this.y.advance());
        }

        if (direction === DirectionEnum.SOUTH) {
            return new Position(this.x, this.y.goBack());
        }

        if (direction === DirectionEnum.EAST) {
            return new Position(this.x.advance(), this.y);
        }

        if (direction === DirectionEnum.WEST) {
            return new Position(this.x.goBack(), this.y);
        }

        return new Position(this.x, this.y);
    }

    public getValue() {
        return {
            x: this.x.getValue(),
            y: this.y.getValue()
        };
    }

}

class Coordinate {
    private static readonly minCoordinate = 0;
    private static readonly maxCoordinate = 9;

    private constructor(private value: number) {        
    }

    static create(value: number = 0) {
        if (value < Coordinate.minCoordinate) {
            throw new Error(`the coordinate value cannot be less than ${Coordinate.minCoordinate}`)
        }

        if (value > Coordinate.maxCoordinate) {
            throw new Error(`the coordinate value cannot be greater than ${Coordinate.maxCoordinate}`)
        }

        return new Coordinate(value);
    }

    public advance() {
        let newValue = this.value + 1;
        if (newValue > Coordinate.maxCoordinate) {
            newValue = 0;
        }

        return new Coordinate(newValue);
    }

    public goBack() {
        let newValue = this.value - 1;
        if (newValue < Coordinate.minCoordinate) {
            newValue = 9;
        }

        return new Coordinate(newValue);
    }
    
    public getValue() {
        return this.value;
    }
}