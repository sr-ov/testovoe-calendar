import styled from 'styled-components'

export const Footer = styled.div`
	background-color: #e7e7e7;
	border-top: 2px solid #cdcdcd;
	padding: 10px 20px;
`

export const FooterRemove = styled.button`
	padding: 10px;
	color: ${(props) => props.theme.colors.accent};
`
