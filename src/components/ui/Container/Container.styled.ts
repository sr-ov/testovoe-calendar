import styled from 'styled-components'

export const Container = styled.div<{ withPadding?: boolean }>`
	max-width: 740px;
	margin: 0 auto;
	padding: 0 ${(props) => (props.withPadding ? '15px' : '0')};
`
