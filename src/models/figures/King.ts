import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import BlackLogo from "../../assets/black-king.png";
import WhiteLogo from "../../assets/white_king.png";

export class King extends Figure {

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo
        this.name = FigureNames.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target))
            return false;



        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        if ((dy === 1 && dx === 0) || (dx === 1 && dy === 0) || (dx === 1 && dy === 1)) {
            return true
        }




        return false

    }
}