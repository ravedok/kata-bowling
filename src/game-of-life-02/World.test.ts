import { Cell, CellStatus } from "./Cell";
import { World } from "./World";

describe('World - Game of Life 02', () => {

    it('should have a ', () => {

        expect(World.fromStatus([
            [CellStatus.Alive, CellStatus.Dead, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Dead, CellStatus.Alive]
        ]).toStatus()).toEqual([
            [CellStatus.Alive, CellStatus.Dead, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Dead, CellStatus.Alive]
        ]);
    });

    it('should return a new generation', () => {
        expect(World.fromStatus([
            [CellStatus.Alive, CellStatus.Alive, CellStatus.Alive]
        ]).nextGeneration().toStatus()).toEqual([
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead]
        ]);

        expect(World.fromStatus([
            [CellStatus.Alive, CellStatus.Dead, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Alive],
        ]).nextGeneration().toStatus()).toEqual([
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
        ]);

        expect(World.fromStatus([
            [CellStatus.Alive],
            [CellStatus.Alive],
            [CellStatus.Alive]
        ]).nextGeneration().toStatus()).toEqual([
            [CellStatus.Dead],
            [CellStatus.Alive],
            [CellStatus.Dead]
        ]);

        expect(World.fromStatus([
            [CellStatus.Alive, CellStatus.Dead, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Dead, CellStatus.Alive],
        ]).nextGeneration().toStatus()).toEqual([
            [CellStatus.Dead, CellStatus.Dead, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Alive, CellStatus.Dead],
            [CellStatus.Dead, CellStatus.Dead, CellStatus.Dead],
        ]);
    });
})