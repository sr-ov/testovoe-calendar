import { HOURS_COUNT } from '../constants'

export const generateHours = () => {
	return Array(HOURS_COUNT - 1)
		.fill('')
		.map((el, i) => {
			const hour = i + 1
			return hour < 10 ? `0${hour}:00` : `${hour}:00`
		})
		.concat('00:00')
}
