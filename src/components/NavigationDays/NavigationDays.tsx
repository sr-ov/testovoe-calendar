import { FC } from 'react'

import * as Styled from './NavigationDays.styled'
import { Text } from '..'
import { DAYS } from '../../constants'
import { useCalendar } from '../../hooks'

interface NavigationDaysProps {}

const NavigationDays: FC<NavigationDaysProps> = () => {
	const { setCurrentDayCells, currentDay } = useCalendar()

	return (
		<Styled.NavigationDaysList>
			{DAYS.map(({ day, dayNum }, i) => {
				return (
					<Styled.NavigationDaysItem key={dayNum}>
						<Styled.NavigationDay>
							<Styled.NavigationDayTop>
								<Text sm bold>
									{day}
								</Text>
							</Styled.NavigationDayTop>
							<Styled.NavigationDayBottom
								data-day-idx={i}
								isActive={i === currentDay}
								onClick={setCurrentDayCells}
							>
								<Text lg>{dayNum}</Text>
							</Styled.NavigationDayBottom>
						</Styled.NavigationDay>
					</Styled.NavigationDaysItem>
				)
			})}
		</Styled.NavigationDaysList>
	)
}

export default NavigationDays
