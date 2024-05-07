import { BowlingGame} from './bowling';



describe("Bowling Game 02", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    })

    const rollMany = (rolls: number, pins: number) => 
        Array.from({ length: rolls}).forEach(() => game.roll(pins));

    it('should calculate 0 when all throws fail', () => {                
        rollMany(20, 0);
        const expected = 0;
        expect(game.calculateScore()).toEqual(expected);
    });

    it('should calculate 20 when all throws knock down only one pin', () => {                
        rollMany(20, 1);
        const expected = 20;
        expect(game.calculateScore()).toEqual(expected);
    });

    it('shouls calculate when given a spare and extra ball', () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(17, 0);

        const expected = 16;
        const result = game.calculateScore();

        expect(result).toEqual(expected);
    })

    it('shouls calculate when given a strike and two extra ball', () => {
        game.roll(10);
        game.roll(3);
        game.roll(4);
        rollMany(16, 0);

        const expected = 24;
        const result = game.calculateScore();

        expect(result).toEqual(expected);
    })
});