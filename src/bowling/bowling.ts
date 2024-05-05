export const calculateScore = (throws: string) => {
    const rounds = throws.split(' ');
    return rounds.reduce((previous: 0, round: string) => {

        const scores = round.split('').map(value => {
            if (isFail(value)) {
                return 0;
            }

            return Number(value);
        })

        return scores.reduce((a, b) => a + b, previous);

    }, 0);
    ;
}

const isFail = (score: string) => score === '-';