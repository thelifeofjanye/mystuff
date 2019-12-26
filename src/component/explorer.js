import React, { useContext } from 'react'
import Item from './item'
import { AppContext } from '../App'

const Explorer = () => {
	const { explorer, explorerWidth, explorerMinWidth } = useContext(AppContext)

	return (
		<div
			className='explorer'
			style={{
				marginLeft: explorerWidth === 0 ? -explorerMinWidth : 0
			}}>
			{explorer.map((item, idx) => (
				<div className='parent' key={idx}>
					<div
						className='folder-line'
						style={{
							marginBottom: !item.open ? -3 : 10
						}}
					/>
					<div>
						<Item
							props={{
								item,
								idx
							}}
						/>
						{!item.open
							? null
							: !item.items
							? null
							: item.items.map((_item, _idx) => (
									<Item
										key={_idx}
										props={{
											item: _item,
											idx,
											_idx
										}}
									/>
							  ))}
					</div>
				</div>
			))}
		</div>
	)
}

export default Explorer
