import { FC } from 'react'

import { Header, Navigation, Cells, StickyWrapper, Footer, Fade } from '..'
import { useCalendar } from '../../hooks'
import { TMatrix } from '../../types/cells'

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
	const { onCellClick, state, isShowRemoveBtn, onRemoveEvent } = useCalendar()

	return (
		<div>
			<StickyWrapper>
				<Header />
				<Navigation />
			</StickyWrapper>

			<Cells
				cells={state.cells as TMatrix}
				onCellClick={onCellClick}
				cellToRemoveId={state.cellToRemoveId}
			/>

			<StickyWrapper bottom>
				<Fade play={isShowRemoveBtn}>
					<Footer onRemoveEvent={onRemoveEvent} />
				</Fade>
			</StickyWrapper>
		</div>
	)
}

export default Calendar
