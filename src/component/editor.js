import React, { useRef, useState, useEffect, useContext } from 'react'
import { AppContext } from '../App'

const Editor = ({ props }) => {
	const { fileActive, files, Render } = props

	const [line, setLine] = useState(0)

	const { lang } = useContext(AppContext)

	useEffect(() => {
		if (textEditor.current) {
			setLine(textEditor.current.childElementCount)
		}
	}, [fileActive])

	const textEditor = useRef()
	const lineEditor = useRef()

	return (
		<div className='editor'>
			{files.length === 0 ? (
				<div className='nothing'>{lang.hello} :)</div>
			) : (
				<>
					<div
						className='line'
						ref={lineEditor}
						onScroll={() =>
							(textEditor.current.scrollTop =
								lineEditor.current.scrollTop)
						}>
						{[...Array(Math.floor(line)).keys()].map(idx => (
							<div key={idx}>{idx + 1}</div>
						))}
					</div>
					<div
						className='textEditor'
						ref={textEditor}
						onScroll={() =>
							(lineEditor.current.scrollTop =
								textEditor.current.scrollTop)
						}>
						<Render.current />
					</div>
				</>
			)}
		</div>
	)
}

export default Editor
