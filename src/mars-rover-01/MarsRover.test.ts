import { MarsRover } from './MarsRover'
describe('Mars Rover 01', () => {
    it('should turn left', () => {
        const marsRover = MarsRover.create().turnLeft();
        expect(marsRover.toString()).toBe('0:0:W');
    })

    it('should turn right', () => {
        const marsRover = MarsRover.create().turnRight();
        expect(marsRover.toString()).toBe('0:0:E');
    })
    
    it('should advance', () => {
        const marsRover = MarsRover.create().advance()
        expect(marsRover.toString()).toBe('0:1:N');
    })

    it('should advance twice to right', () => {
        const marsRover = MarsRover.create()
        .turnRight()
        .advance()
        .advance();

        expect(marsRover.toString()).toBe('2:0:E');
    });

    it('should advance twice to left', () => {
        const marsRover = MarsRover.create()
        .turnLeft()
        .advance()
        .advance();

        expect(marsRover.toString()).toBe('8:0:W');
    });

    it('should turn around and advance twice', () => {
        const marsRover = MarsRover.create() 
            .turnLeft()
            .turnLeft()
            .advance()
            .advance()
        ;

        expect(marsRover.toString()).toBe('0:8:S');
    });

    it('we should be able to make a roundabout', () => {
        const marsRover = MarsRover.create()
            .advance()
            .turnRight()
            .advance()
            .advance()
            .turnRight()            
        ;

        expect(marsRover.toString()).toBe('2:1:S');

    });
})
