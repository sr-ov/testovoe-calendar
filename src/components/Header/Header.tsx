import { FC } from 'react'

import * as Styled from './Header.styled'
import { ButtonIcon, Text, Container } from '..'
import { ReactComponent as PlusIcon } from '../../icons/plus.svg'

interface HeaderProps {}

const Header: FC<HeaderProps> = (props) => {
	return (
		<Styled.Header>
			<Container withPadding>
				<Styled.HeaderContent>
					<Text xl>Interview Calendar</Text>
					<ButtonIcon>
						<PlusIcon height={24} width={24} stroke={'#ff3e04'} fill={'#ff3e04'} />
					</ButtonIcon>
				</Styled.HeaderContent>
			</Container>
		</Styled.Header>
	)
}

export default Header
