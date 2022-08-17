import { COLLS_COUNT, ROWS_COUNT } from '../constants'
import { TMatrix } from '../types/cells'

export const generateMatrix = (): TMatrix => {
	const matrix: TMatrix = []

	for (let index = 0; index < ROWS_COUNT; index++) {
		const row: null[] = []

		for (let i = 0; i < COLLS_COUNT; i++) {
			row.push(null)
		}

		matrix.push(row)
	}

	return matrix
}
