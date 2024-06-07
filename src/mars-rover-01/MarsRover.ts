import { Direction } from "./Direction";
import { Position } from "./Position";

export class MarsRover {
    private constructor(private readonly  position: Position, private readonly direction: Direction) {
    }

    public static create(): MarsRover {
        return new MarsRover(Position.create(), Direction.create());
    }

    public turnLeft() {
        const newDirection = this.direction.turnLeft();

        return new MarsRover(this.position, newDirection);
    }

    public turnRight() {
        const newDirection = this.direction.turnRight();

        return new MarsRover(this.position, newDirection);
    }

    public advance() {
        const newPosition = this.position.moveTo(this.direction.getValue())
        
        return new MarsRover(newPosition, this.direction);
    }

    public getValue() {
        return {
            position: this.position.getValue(),
            direction: this.direction.getValue()
        }
    }        

    public toString() {
        return `${this.position.getValue().x}:${this.position.getValue().y}:${this.direction.toString()}`
    }
}

    