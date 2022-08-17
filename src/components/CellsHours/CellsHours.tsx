import { FC, memo } from 'react'

import * as Styled from './CellsHours.styled'
import { generateHours } from '../../utils'

interface CellsHoursProps {}

const CellsHours: FC<CellsHoursProps> = (props) => {
	return (
		<Styled.Hours>
			{generateHours().map((hour) => {
				return <Styled.HoursItem key={hour}>{hour}</Styled.HoursItem>
			})}
		</Styled.Hours>
	)
}

export default memo(CellsHours)
