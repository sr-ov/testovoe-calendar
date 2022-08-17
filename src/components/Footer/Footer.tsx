import { FC } from 'react'

import * as Styled from './Footer.styled'
import { Container, Text } from '..'

interface FooterProps {
	onRemoveEvent: VoidFunction
}

const Footer: FC<FooterProps> = ({ onRemoveEvent }) => {
	return (
		<Container>
			<Styled.Footer>
				<Styled.FooterRemove onClick={onRemoveEvent}>
					<Text lg>Delete</Text>
				</Styled.FooterRemove>
			</Styled.Footer>
		</Container>
	)
}

export default Footer
