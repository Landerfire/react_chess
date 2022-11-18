import { Cell } from './Cell';
import { Colors } from './Colors';
import { Bishop } from './figures/Bishop';
import { King } from './figures/King';
import { Knight } from './figures/Knight';
import { Pawn } from './figures/Pawn';
import { Queen } from './figures/Queen';
import { Rook } from './figures/Rook';

export class Board {
	cells: Cell[][] = [];

	private addPawns(): void {
		for (let i = 0; i < 8; i++) {
			new Pawn(Colors.BLACK, this.getCell(i, 1));
			new Pawn(Colors.WHITE, this.getCell(i, 6));
		}
	}

	private addKings(): void {
		new King(Colors.BLACK, this.getCell(4, 0));
		new King(Colors.WHITE, this.getCell(4, 7));
	}

	private addQueens(): void {
		new Queen(Colors.BLACK, this.getCell(3, 0));
		new Queen(Colors.WHITE, this.getCell(3, 7));
	}

	private addRooks(): void {
		for (let i = 0; i <= 7; i += 7) {
			new Rook(Colors.BLACK, this.getCell(i, 0));
			new Rook(Colors.WHITE, this.getCell(i, 7));
		}
	}

	private addKnights(): void {
		for (let i = 1; i <= 6; i += 5) {
			new Knight(Colors.BLACK, this.getCell(i, 0));
			new Knight(Colors.WHITE, this.getCell(i, 7));
		}
	}

	private addBishops(): void {
		for (let i = 2; i <= 5; i += 3) {
			new Bishop(Colors.BLACK, this.getCell(i, 0));
			new Bishop(Colors.WHITE, this.getCell(i, 7));
		}
	}

	public initCells(): void {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = [];
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0) {
					row.push(new Cell(this, j, i, Colors.BLACK, null)); //! Черные ячейки
				} else {
					row.push(new Cell(this, j, i, Colors.WHITE, null)); //! Белые ячейки
				}
			}
			this.cells.push(row);
		}
	}

	public getCell(x: number, y: number): Cell {
		return this.cells[y][x];
	}

	public addFigures(): void {
		this.addKings();
		this.addQueens();
		this.addBishops();
		this.addKnights();
		this.addRooks();
		this.addPawns();
	}
}
