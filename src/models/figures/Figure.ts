import logo from '../../assets/black_king.png'
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
    FIGURE = "Figure",
    KING = "King",
    KNIGHT = "Knight",
    PAWN = "Pawn",
    QUEEN = "Queen",
    ROOK = "Rook",
    BISHOP = "Bishop",
}

export class Figure {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: FigureNames;
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.logo = null;
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    kingUnderAttack(target: Cell) {
        if (target.figure?.name === FigureNames.KING)
            return true
    }

    canMove(target: Cell): boolean {

        if (target.figure?.color === this.color)
            return false
        // if(this.kingUnderAttack(target) )
        //     return false

        return true
    }

    moveFigure(target: Cell) {

    }
}