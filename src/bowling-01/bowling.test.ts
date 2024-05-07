import { calculateScore } from './bowling'
describe('kata bowling', () => {
    it('should return zero points when all throws have been failures', () => {
        const throws = "-- -- -- -- -- -- -- -- -- --";
        const score = calculateScore(throws);
        const expected = 0;
        expect(score).toEqual(expected);
    });

    it('should return twenty points with ten pairs of ones', () => {
        const throws = "11 11 11 11 11 11 11 11 11 11";
        const score = calculateScore(throws);
        const expected = 20;
        expect(score).toEqual(expected);
    });

    it('should return a score of twenty with a spare and a hit', () => {
        const throws = "5/ 5- -- -- -- -- -- -- -- --";
        const score = calculateScore(throws);
        const expected = 20;
        expect(score).toEqual(expected);
    })

    it('should return twenty with one strike, two hits next and sixteen misses', () => {
        const throws = "X 23 -- -- -- -- -- -- -- --";
        const score = calculateScore(throws);
        const expected = 20;
        expect(score).toEqual(expected);
    })
    

    
})