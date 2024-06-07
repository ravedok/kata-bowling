import { DirectionEnum } from './Direction';
import { Position } from './Position'

describe('Rober Mars 01 - Position', () => {
    it('should initially be 0 0', () => {
        const position = Position.create();
        expect(position.getValue()).toEqual({
            x: 0,
            y: 0
        });
    });

    it('should move north', () => {
        const position = Position
            .create()
            .moveTo(DirectionEnum.NORTH);
        expect(position.getValue()).toEqual({
            x: 0,
            y: 1
        });
    });

    it('should move south', () => {
        const position = Position
            .create()
            .moveTo(DirectionEnum.SOUTH);
        expect(position.getValue()).toEqual({
            x: 0,
            y: 9
        });
    });

    it('should move east', () => {
        const position = Position
            .create()
            .moveTo(DirectionEnum.EAST);
        expect(position.getValue()).toEqual({
            x: 1,
            y: 0
        });
    });

    it('should move west', () => {
        const position = Position
            .create()
            .moveTo(DirectionEnum.WEST);
        expect(position.getValue()).toEqual({
            x: 9,
            y: 0
        });
    });

    it('should be able to reach south from north', () => {
        const position = Position
            .create(0, 9)
            .moveTo(DirectionEnum.NORTH)            
        expect(position.getValue()).toEqual({
            x: 0,
            y: 0
        });
    });

    it('should be able to reach west from east', () => {
        const position = Position
            .create(9, 0)
            .moveTo(DirectionEnum.EAST)            
        expect(position.getValue()).toEqual({
            x: 0,
            y: 0
        });
    });
});