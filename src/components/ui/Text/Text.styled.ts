import styled from 'styled-components'

interface Props {
	sm?: boolean
	lg?: boolean
	xl?: boolean
	bold?: boolean
}

export const Text = styled.div<Props>`
	font-size: ${(props) =>
		(props.sm && props.theme.text.sm) ||
		(props.lg && props.theme.text.lg) ||
		(props.xl && props.theme.text.xl)};
	font-weight: ${(props) => props.bold && 600};
`
