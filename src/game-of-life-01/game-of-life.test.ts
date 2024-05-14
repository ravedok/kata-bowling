import { gameOfLife } from './game-of-life'
describe('Game of life 01', () => {
    it('a single cell should be dead', () => {
        const initialState = '1';
        const expected = '0';
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a cell with two horizontal neighbors should survive', () => {
        const initialState = '111';
        const expected = '010';
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a cell with two vertical neighbors should survive', () => {
        const initialState = `1
                              1
                              1`;
        const expected = '0\n1\n0';
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a cell with three neighbors should live', () => {
        const initialState = `001
                              010
                              100`;
        const expected = '000\n010\n000' ;
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a cell with four neighbors should dead', () => {
        const initialState = `01
                              11`;
        const expected = '11\n11' ;
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a dead cell with three living neighbors should be resurrected', () => {
        const initialState = `01
                              11`;
        const expected = '11\n11' ;
        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });

    it('a complete example', () => {
        const initialState = `00000000
                              00001000
                              00011000
                              00000000`;
        const expected = '00000000' + '\n' +
                         '00011000' + '\n' +
                         '00011000' + '\n' +
                         '00000000';

        const result = gameOfLife(initialState);

        expect(result).toEqual(expected);
    });
});
    