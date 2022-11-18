import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
	cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
	const className: string = `cell ${cell.color}`;

	return (
		<div className={className}>
			{cell.figure?.logo && <img src={cell.figure.logo} alt={cell.figure.color + cell.figure.name} />}
		</div>
	);
};

export default CellComponent;
