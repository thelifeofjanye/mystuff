import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<DndProvider backend={Backend}>
		<App />
	</DndProvider>,
	document.getElementById('root')
)
serviceWorker.unregister()
