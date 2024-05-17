import { Cell, CellStatus } from "./Cell";

export class World {
    private cellMatrix: Cell[][];

    private constructor(matrix: CellStatus[][]) {
        this.cellMatrix = matrix.map(row => row.map(status => Cell.fromStatus(status)));
    }

    static fromStatus(matrix: CellStatus[][]): World {
        return new World(matrix);
    }

    nextGeneration(): World {
        const nextGenerationMatrix = this.cellMatrix.map(
            (row, rowIndex) => row.map((cell, column) =>
                cell.nextGeneration(
                    this.neighbornInSameRow(rowIndex, column)
                    + this.neighbornInPreviousRow(rowIndex, column)
                    + this.neighbornInNextRow(rowIndex, column)
                )
            )
        );

        return World.fromStatus(nextGenerationMatrix);
    }

    toStatus(): CellStatus[][] {
        return this.cellMatrix.map(row => row.map(cell => cell.status));
    }

    private neighbornInSameRow(row: number, column: number): number {
        return this.livingNeighbornsInPreviousCell(row, column)
            + this.livingNeighbornsInNextCell(row, column)
    }

    private livingNeighbornsInOtherRow(row: number, column: number): number {

        return this.livingNeighbornsInPreviousCell(row, column)
            + this.livingNeighbornsInCell(row, column)
            + this.livingNeighbornsInNextCell(row, column)
    }

    private neighbornInPreviousRow(row: number, column: number): number {
        const previousRow = row - 1;

        return this.livingNeighbornsInOtherRow(previousRow, column);
    }

    private neighbornInNextRow(row: number, column: number): number {
        const nextRow = row + 1;

        return this.livingNeighbornsInOtherRow(nextRow, column);
    }

    private livingNeighbornsInCell(row: number, column: number): number {
        const cell = this.cellMatrix[row]?.[column]
        if (cell?.isAlive()) {
            return 1;
        }

        return 0;
    }

    private livingNeighbornsInNextCell(row: number, column: number): number {
        const previousCol = column - 1;

        return this.livingNeighbornsInCell(row, previousCol)
    }

    private livingNeighbornsInPreviousCell(row: number, column: number): number {
        const nextCol = column + 1;

        return this.livingNeighbornsInCell(row, nextCol)
    }
}