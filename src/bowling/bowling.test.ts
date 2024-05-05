import { calculateScore } from './bowling'
describe('kata bowling', () => {
    it('should return zero points when all throws have been failures', () => {
        const throws = "-- -- -- -- -- -- -- -- -- --";
        const score = calculateScore(throws);
        const expected = 0;
        expect(score).toEqual(expected);
    });
})