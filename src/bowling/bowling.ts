const FAIL_VALUE = 0;
const SPARE_VALUE = 10;
const STRIKE_VALUE = 10;

type Round = {
    type: 'strike' | 'spare' | 'default'
    
    throwings: [number, number]    
}

export const calculateScore = (throws: string) => {
    const rawRounds = throws.split(' ');
    const rounds = rawRounds.map(rawRound => parseRound(rawRound));    

    return sumRounds(rounds);    
}

const sumRounds = (rounds: Round[]) => rounds.reduce((total, current, index) => {
    total += getTotalFromRound(current);
    if (current.type === 'strike') {
        const nextRound = rounds[index + 1];
        total += getTotalFromRound(nextRound);
    }

    if (current.type === 'spare') {
        total += rounds[index + 1].throwings[0];
    }

    return total;
}, 0)

const getTotalFromRound = (round: Round) => round.throwings.reduce((a, b) => a + b);

const parseRound = (rawRound: string): Round => {
    if (isStrike(rawRound)) {
        return {
            type: 'strike',
            throwings: [STRIKE_VALUE, 0]
        }
    }
    const [first, second ] = getThrowingFromRawRound(rawRound);

    if (isSpare(rawRound)) {
        return {
            type: 'spare',
            throwings: [
                first, 
                STRIKE_VALUE - first
            ]
        };
    }

    return {
        type: 'default',
        throwings: [first, second]
    }
}

const isFail = (raw: string) => raw === '-';
const isSpare = (raw: string) => raw.includes('/');
const isStrike = (raw: string) => raw === 'X';

const getThrowingFromRawRound = (rawRound: string): number[] => 
    rawRound.split('').map(value => {
        if (isFail(value) || isSpare(value)) {
            return 0;
        }

        return Number(value);

    });
