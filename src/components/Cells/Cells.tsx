import { FC } from 'react'

import * as Styled from './Cells.styled'
import { Container, CellsHours } from '..'
import { TMatrix } from '../../types/cells'

interface CellsProps {
	cells: TMatrix
	onCellClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	cellToRemoveId: string
}

const Cells: FC<CellsProps> = ({ cells, onCellClick, cellToRemoveId }) => {
	return (
		<Container>
			<Styled.CellsWrapper>
				<CellsHours />

				<Styled.Cells>
					<Styled.CellsContent>
						{cells.map((row, rowIdx) => {
							return (
								<Styled.CellsRow key={rowIdx}>
									{row.map((el, cellIdx) => {
										return (
											<Styled.Cell
												key={cellIdx}
												data-row-idx={rowIdx}
												data-cell-idx={cellIdx}
												data-cell-id={el?.id}
												isNotEmpty={Boolean(el?.value)}
												isActive={Boolean(cellToRemoveId === el?.id)}
												onClick={onCellClick}
											>
												<Styled.CellContent />
											</Styled.Cell>
										)
									})}
								</Styled.CellsRow>
							)
						})}
					</Styled.CellsContent>
				</Styled.Cells>
			</Styled.CellsWrapper>
		</Container>
	)
}

export default Cells
