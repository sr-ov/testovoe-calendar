import { MouseEvent } from 'react'
import { proxy, useSnapshot } from 'valtio'
import { devtools, derive } from 'valtio/utils'
import isEmpty from 'lodash.isempty'
import { v4 as uuidv4 } from 'uuid'

import { generateMatrix } from '../utils'
import { TMatrix } from '../types/cells'

const currentDay = 3
const days = new Map<number, TMatrix>([[currentDay, generateMatrix()]])
const cells = days.get(currentDay)!

const state = proxy({
	currentDay,
	days,
	cells,
	cellToRemoveId: '',
	cellToRemove: [] as number[],
})
const derived = derive({
	isShowRemoveBtn: (get) => Boolean(get(state).cellToRemoveId),
})

devtools(state)

const setCurrentDayCells = (e: MouseEvent<HTMLButtonElement>) => {
	if (isEmpty(e.currentTarget.dataset)) return

	const { dayIdx } = e.currentTarget.dataset
	const dayIndex = Number(dayIdx)
	state.currentDay = dayIndex

	const hasCells = state.days.has(dayIndex)
	if (hasCells) {
		state.cells = state.days.get(dayIndex)!
		return
	}

	const cells = generateMatrix()
	state.days.set(dayIndex, cells)
	state.cells = cells
}

const isCellEmpty = (rowIdx: number, cellIdx: number) => {
	return isEmpty(state.cells[rowIdx][cellIdx])
}

const onAddNewEvent = (rowIdx: number, cellIdx: number) => {
	state.cellToRemoveId = ''

	const data = prompt('Введите что-нибудь!!!')
	if (!data) return

	const newCell = { id: uuidv4(), value: data }
	state.cells[rowIdx][cellIdx] = newCell
}

const onRemoveEvent = () => {
	const [row, cell] = state.cellToRemove
	state.cells[row][cell] = null
	state.cellToRemoveId = ''
}

const onSetNewCellToRemove = (
	newCellId: string | undefined,
	rowIdx: number,
	cellIdx: number
) => {
	if (!newCellId) return

	const prevCellId = state.cellToRemoveId
	state.cellToRemoveId = prevCellId === newCellId ? '' : newCellId
	state.cellToRemove = [rowIdx, cellIdx]
}

const onCellClick = (e: MouseEvent<HTMLButtonElement>) => {
	if (isEmpty(e.currentTarget.dataset)) return

	const { rowIdx, cellIdx, cellId } = e.currentTarget.dataset
	const rowIndex = Number(rowIdx)
	const cellIndex = Number(cellIdx)

	if (isCellEmpty(rowIndex, cellIndex)) {
		onAddNewEvent(rowIndex, cellIndex)
	} else {
		onSetNewCellToRemove(cellId, rowIndex, cellIndex)
	}
}

export const useCalendar = () => {
	const snap = useSnapshot(state)

	return {
		onCellClick,
		onRemoveEvent,
		setCurrentDayCells,
		currentDay: snap.currentDay,
		state: snap,
		isShowRemoveBtn: derived.isShowRemoveBtn,
	}
}
