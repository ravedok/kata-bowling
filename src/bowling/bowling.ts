const FAIL_VALUE = 0;
const SPARE_VALUE = 10;
const STRIKE_VALUE = 10;

export const calculateScore = (throws: string) => {
    const rounds = throws.split(' ');

    return rounds.reduce((previous: 0, round: string, index: number) => {

        if (isStrike(round)) {
            const nextRoundIndex = index + 1;
            const nextRound = rounds[nextRoundIndex];
            return previous + STRIKE_VALUE + getRoundScore(nextRound, index + 1, rounds);

        }

        return previous +  getRoundScore(round, index, rounds);
    }, 0);
    ;
}

const isFail = (score: string) => score === '-';
const isSpare = (score: string) => score === '/';
const isStrike = (score: string) => score === 'X';

const getThrowingValue = (throwing: string) => {
    if (isFail(throwing)) {
        return FAIL_VALUE;
    }

    return Number(throwing);

}
function getRoundScore(round: string, roundIndex: number, rounds: string[]) {
    const scores = round.split('').map((value, _, values) => {

        if (isSpare(value)) {
            const previousThrowing = Number(values[0]);
            const nextThrowing = rounds[roundIndex + 1][0];
            const nextThrowingScore = getThrowingValue(nextThrowing);

            return SPARE_VALUE - previousThrowing + nextThrowingScore;
        }

        return getThrowingValue(value);
    });

    return scores.reduce((a, b) => a + b, 0);
}