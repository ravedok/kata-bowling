import { Direction } from './Direction'

describe('Mars Rober 01 - Direction', () => {

    it('should point north when created', () => {
        const direction = Direction.create();
        expect(direction.toString()).toBe('N');
    });

    it('you should head west if you turn right', () => {
        const direction = Direction.create()
                            .turnRight();
        expect(direction.toString()).toBe('E');
    });

    it('you should head east if you turn left', () => {
        const direction = Direction.create()
                            .turnLeft();
        expect(direction.toString()).toBe('W');
    });

    it('should point south if you turn right twice', () => {
        const direction = Direction.create()
                            .turnRight()
                            .turnRight();
        expect(direction.toString()).toBe('S');
    });

    it('should point south if you turn left twice', () => {
        const direction = Direction.create()
                            .turnLeft()
                            .turnLeft();
        
        expect(direction.toString()).toBe('S');
    });


});