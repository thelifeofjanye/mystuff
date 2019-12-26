import React, { useContext } from 'react'
import SVG from '../stuff/svg'
import { AppContext } from '../App'

const Item = ({ props }) => {
	const { item, idx, _idx } = props

	const {
		explorer,
		setExplorer,
		explorerActive,
		setExplorerActive,
		setRender,
		files,
		setFiles,
		setFileActive,
		explorerWidth
	} = useContext(AppContext)

	return (
		<div
			className={`item-wrapper ${
				explorerActive ===
					(typeof _idx === 'undefined'
						? idx + ''
						: idx + '' + _idx) &&
				(typeof _idx !== 'undefined' || item.open)
					? 'active'
					: ''
			}`}
			onClick={() => {
				if (typeof _idx !== 'undefined') {
					const exist = file => {
						return JSON.stringify(file) === JSON.stringify(item)
					}
					if (!files.some(exist)) {
						const newFiles = [
							...files,
							{ ...item, dragging: false }
						]
						setFiles(newFiles)
					}
					setFileActive(item.id)
					setRender({ current: item.render })
				} else {
					setExplorer([
						...explorer.slice(0, idx),
						{
							...item,
							open: !item.open
						},
						...explorer.slice(idx + 1)
					])
				}
				setExplorerActive(item.id)
			}}>
			<div
				style={{
					width: explorerWidth - 40,
					marginLeft: typeof _idx !== 'undefined' ? 30 : 10
				}}
				className='item'>
				{typeof item.render !== 'undefined' ? null : (
					<SVG name={`chevron_${item.open ? 'down' : 'right'}`} />
				)}
				<SVG width={20} name={item.type + (item.open ? '_open' : '')} />
				{' ' + item.name}
			</div>
		</div>
	)
}

export default Item
