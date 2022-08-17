import { FC, PropsWithChildren, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './Fade.module.css'

interface FadeProps {
	play: boolean
}

const Fade: FC<PropsWithChildren<FadeProps>> = ({ children, play }) => {
	const nodeRef = useRef(null)

	return (
		<CSSTransition
			in={play}
			timeout={200}
			mountOnEnter
			unmountOnExit
			classNames={{ ...styles }}
			nodeRef={nodeRef}
		>
			<div ref={nodeRef}>{children}</div>
		</CSSTransition>
	)
}

export default Fade
