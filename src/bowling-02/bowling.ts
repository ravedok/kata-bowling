
type Frame = number[];

export class BowlingGame {
    private frames: Frame[] = [];

    readonly MAX_SCORE_FOR_FRAME = 10;
    readonly MAX_ROLLS_BY_FRAME = 2;

    roll(pins: number): void {
        const currentFrame = this.currentFrame();
        currentFrame.push(pins);

        const isStrike = pins === this.MAX_SCORE_FOR_FRAME && currentFrame.length === 1;
        if (isStrike) {
            currentFrame.push(0);
        }        

        this.frames.push(currentFrame);
    }

    private currentFrame(): Frame {
        const lastFrame = this.frames.at(-1);
        if (!lastFrame || lastFrame.length === this.MAX_ROLLS_BY_FRAME) {
            return [];
        }

        return this.frames.pop();
    }

    calculateScore(): number {
        return this.frames.reduce((total, currentFrame,  frameIndex) => {
            total += this.scoreFromFrame(frameIndex);

            if (this.isStrike(frameIndex)) {
                total += this.scoreFromFrame(frameIndex + 1);
            }

            if (this.isSpare(frameIndex)) {
                total += this.frames[frameIndex + 1][0];
            }

            return total;            
        }, 0);
    }

    private isStrike(frameIndex: number): boolean {
        const [first, second ] = this.frames[frameIndex];
        
        return first === this.MAX_SCORE_FOR_FRAME
            && second === 0;
    }

    private isSpare(frameIndex: number): boolean {
        const [first, second] = this.frames[frameIndex];

        return  first + second == this.MAX_SCORE_FOR_FRAME && second > 0;
    }

    private scoreFromFrame(frameIndex: number): number {
        const [first, second] = this.frames[frameIndex];
        return first + second ?? 0; 
    }    
}


