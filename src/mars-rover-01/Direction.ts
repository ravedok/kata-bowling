
export enum DirectionEnum {
    NORTH, 
    WEST,
    SOUTH, 
    EAST, 
}

export class Direction {
    private constructor(private readonly direction: DirectionEnum = DirectionEnum.NORTH ) {
    }

    public static create() {
        return new Direction( )
    }

    public turnLeft( ) {
        return new Direction((this.direction + 1) % 4);
    }

    public turnRight( ) {
        return new Direction((this.direction + 3) % 4);
    }

    public getValue() {
        return this.direction;
    }

    public toString() {

        const directionMapper: Record<DirectionEnum, string> = {
            [DirectionEnum.NORTH]: 'N',
            [DirectionEnum.SOUTH]: 'S',
            [DirectionEnum.EAST]: 'E',
            [DirectionEnum.WEST]: 'W'
        }

        return directionMapper[this.direction]
    }
}