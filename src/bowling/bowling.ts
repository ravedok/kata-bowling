const FAIL_VALUE = 0;
const SPARE_VALUE = 10;

export const calculateScore = (throws: string) => {
    const rounds = throws.split(' ');



    return rounds.reduce((previous: 0, round: string, index: number) => {

        const scores = round.split('').map((value, _, values) => {
            if (isSpare(value)) {
                const previousThrowing = Number(values[0]);
                const nextThrowing = rounds[index  + 1][0];
                const nextThrowingScore = getThrowingValue(nextThrowing);

                return SPARE_VALUE - previousThrowing + nextThrowingScore;
            }

            return getThrowingValue(value);
        })

        return scores.reduce((a, b) => a + b, previous);

    }, 0);
    ;
}

const isFail = (score: string) => score === '-';
const isSpare = (score: string) => score === '/';

const getThrowingValue = (throwing: string) => {
    if (isFail(throwing)) {
        return FAIL_VALUE;
    }

    return Number(throwing);

}