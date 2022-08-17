import { FC } from 'react'

import * as Styled from './Navigation.styled'
import { NavigationDays, NavigationMonths, Container } from '..'

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
	return (
		<Container>
			<Styled.Navigation>
				<NavigationDays />
				<NavigationMonths />
			</Styled.Navigation>
		</Container>
	)
}

export default Navigation
