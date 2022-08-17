import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	body {
		font-family: Lato, sans-serif;
		font-size: 16px;
	}

	button, a {
		cursor: pointer;
	}
`
