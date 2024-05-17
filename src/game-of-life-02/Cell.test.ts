import { Cell, CellStatus } from './Cell'

describe('Game of life 02', () => {
    it('should still be alive if you have two living neighbors.', () => {
        const numberOfNeighborn = 2
        const cell = Cell.fromStatus(CellStatus.Alive);
        
        expect(cell.nextGeneration(numberOfNeighborn)).toBe(CellStatus.Alive);
    });

    it('should still be alive if you have three living neighbors.', () => {
        const numberOfNeighborn = 3
        const cell = Cell.fromStatus(CellStatus.Alive);
        
        expect(cell.nextGeneration(numberOfNeighborn)).toBe(CellStatus.Alive);
    });

    it('should die if you have less than two living neighbors.', () => {
        const numberOfNeighborn = 1
        const cell = Cell.fromStatus(CellStatus.Alive);
        
        expect(cell.nextGeneration(numberOfNeighborn)).toBe(CellStatus.Dead);
    });

    it('should die if you have more than three living neighbors.', () => {
        const numberOfNeighborn = 4
        const cell = Cell.fromStatus(CellStatus.Alive);
        
        expect(cell.nextGeneration(numberOfNeighborn)).toBe(CellStatus.Dead);
    });

    it('should be born if you have exactly three living neighbors.', () => {
        const numberOfNeighborn = 3
        const cell = Cell.fromStatus(CellStatus.Dead);
        
        expect(cell.nextGeneration(numberOfNeighborn)).toBe(CellStatus.Alive);
    });
});