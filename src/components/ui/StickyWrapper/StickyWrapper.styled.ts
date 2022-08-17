import styled from 'styled-components'

export const StickyWrapper = styled.div<{ bottom?: boolean }>`
	position: sticky;
	${(props) => (props.bottom ? 'bottom' : 'top')}: 0;
	left: 0;
	z-index: 100;
`
