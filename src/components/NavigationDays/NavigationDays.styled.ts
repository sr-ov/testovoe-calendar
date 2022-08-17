import styled from 'styled-components'

export const NavigationDaysList = styled.ul`
	display: flex;
	gap: 10px;
`

export const NavigationDaysItem = styled.li`
	flex: 1;
`

export const NavigationDay = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const NavigationDayTop = styled.div`
	text-align: center;
	margin-bottom: 6px;
	text-transform: uppercase;
`

export const NavigationDayBottom = styled.button<{ isActive?: boolean }>`
	border-radius: 100%;
	padding: 8px;
	background-color: ${(props) => props.isActive && props.theme.colors.accent};
	color: ${(props) => props.isActive && '#fff'};
	pointer-events: ${(props) => (props.isActive ? 'none' : 'all')};
	transition: background-color 0.2s;
`
