
export enum CellStatus {
    Alive,
    Dead,    
}

export class Cell {
    private readonly MinNeighbornToLive = 2;
    private readonly MaxNeighbornToLive = 3;
    private readonly DeadNeighbornToLive = 3;

    private constructor(public status: CellStatus) {}

    static fromStatus(status: CellStatus): Cell {
        return new Cell(status);
    }

    static createAlive(): Cell {
        return new Cell(CellStatus.Alive);
    }

    static createDead(): Cell {
        return new Cell(CellStatus.Dead);
    }

    nextGeneration(numberOfNeighborn: number): CellStatus {
        if (this.mustSurvive(numberOfNeighborn)) {
            return CellStatus.Alive;
        }

        if (this.mustBeBorn(numberOfNeighborn)) {
            return CellStatus.Alive;
        }
        
        return CellStatus.Dead;
    }

    isAlive(): boolean {
        return this.status === CellStatus.Alive;
    }

    isDead(): boolean {
        return this.status === CellStatus.Dead;
    }

    private mustSurvive(numberOfNeighborn: number): boolean {
        if (this.status === CellStatus.Dead) {
            return false;
        }

        return numberOfNeighborn >= this.MinNeighbornToLive && numberOfNeighborn <= this.MaxNeighbornToLive;
    }

    private mustBeBorn(numberOfNeighborn: number): boolean {
        if (this.status === CellStatus.Alive) {
            return false;
        }
        return numberOfNeighborn === this.DeadNeighbornToLive;
    }


}