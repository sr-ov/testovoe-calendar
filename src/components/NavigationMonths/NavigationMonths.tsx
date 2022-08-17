import { FC } from 'react'

import * as Styled from './NavigationMonths.styled'
import { ButtonIcon, Text } from '..'
import { ReactComponent as ArrowLeftIcon } from '../../icons/arrow-left.svg'
import { ReactComponent as ArrowRightIcon } from '../../icons/arrow-right.svg'

interface NavigationMonthsProps {}

const NavigationMonths: FC<NavigationMonthsProps> = (props) => {
	return (
		<Styled.NavigationMonths>
			<ButtonIcon>
				<ArrowLeftIcon fill={'#ff3e04'} height={24} width={24} />
			</ButtonIcon>
			<Styled.NavigationMonth>
				<Text>March 2019</Text>
			</Styled.NavigationMonth>
			<ButtonIcon>
				<ArrowRightIcon fill={'#ff3e04'} height={24} width={24} />
			</ButtonIcon>
		</Styled.NavigationMonths>
	)
}

export default NavigationMonths
