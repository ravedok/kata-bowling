const MIN_NEIGHBORS = 2
const MAX_NEIGHBORS = 3
const NEIGHBORS_TO_RESURRECT = 3;

enum Cell {
    live = "1",
    dead = "0"
}

type CellGrid = Cell[][];


export const gameOfLife = (initialState: string) => {
    const initialGrid = parseInitialState(initialState)

    const grid: CellGrid = initialGrid
        .map((row, rowIndex) => 
            row.map((cell, colIndex) => 
                cellShouldLive(initialGrid, cell, rowIndex, colIndex) ? Cell.live : Cell.dead
            )
        );

    return parseGridToString(grid);
}

const parseGridToString = (grid: CellGrid) => grid.map(row => row.join('')).join("\n");

const cellShouldLive = (grid: CellGrid, cell: Cell, rowIndex: number, colIndex: number): boolean => {
    let liveNeighbors = 0;

    for (let row = -1; row < 2; row++) {
        const neighborRow = grid[rowIndex + row];
        if (!neighborRow) {
            continue;
        }
        for (let col = -1; col < 2; col++) {

            const isCurrentCell = col === 0 && row === 0 

            if (isCurrentCell) {
                continue;
            }

            const neighbor = neighborRow[colIndex + col];

            if (!neighbor) {
                continue;
            }

            if (isLive(neighbor)) {
                liveNeighbors +=  1;
            }
        }
    }
    if (isDead(cell)) {
        return liveNeighbors === NEIGHBORS_TO_RESURRECT;
    }

    return hasEnoughLivingNeighborgs(liveNeighbors);
}

const isDead = (cell: Cell) => cell === Cell.dead;
const isLive = (cell: Cell) => cell === Cell.live
const hasEnoughLivingNeighborgs = (liveNeighbors: number) => liveNeighbors >= MIN_NEIGHBORS && liveNeighbors <= MAX_NEIGHBORS 

const parseInitialState = (initialState: string): CellGrid => {
    return initialState.split(/\r?\n|\r|\n/g)
        .map(line => line.trim())
        .map(line => line.split(''))
        .map(line => line.map(cell => cell === '1' ? Cell.live : Cell.dead))
        ;
}

