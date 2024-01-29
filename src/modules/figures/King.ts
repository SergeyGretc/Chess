import { Cell } from "../Cell";
import { Colors } from "../Color";
import { Figure, FigureNames } from "./Figure";
import blacklogo from "../../assets/black-king.png";
import whitelogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blacklogo : whitelogo;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }

    if (
      this.cell.isEmptyVertical(target) &&
      (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
    ) {
      return true;
    }
    if (
      this.cell.isEmptyHorizontal(target) &&
      (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
    ) {
      return true;
    }
    // if (target.x === 4 && target.y === 6) {
    //   console.log("клетка");
    // }
    console.log(target.x, target.y);

    // console.log(target.x);
    //      isUnderAtack(target: Cell) {
    //     console.log(this.y);
    //     console.log(this.x);
    //     console.log(target.x);
    //   }
    if (
      this.cell.isEmptyDiagonal(target) &&
      (target.x === this.cell.x + 1 ||
        target.x === this.cell.x - 1 ||
        target.y === this.cell.y + 1 ||
        target.y === this.cell.y - 1)
    ) {
      return true;
    }
    return false;
  }
}
