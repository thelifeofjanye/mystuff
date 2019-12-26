import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import DarkTheme from './theme/dark'
import LightTheme from './theme/light'
import SubHeader from './component/sub-header'
import Explorer from './component/explorer'
import Resizer from './component/resizer'
import Footer from './component/footer'
import Editor from './component/editor'
import Header from './component/header'
import EN from './locale/en'
import {
	Profile,
	About,
	Education,
	Experience,
	Skill,
	Contract
} from './content'

export const AppContext = createContext()

const App = () => {
	const explorerMinWidth = 180
	const [explorerWidth, setExplorerWidth] = useState(
		window.innerWidth <= 480 ? 0 : explorerMinWidth
	)

	const [explorer, setExplorer] = useState([
		{
			id: 1,
			name: 'main',
			type: 'folder',
			open: true,
			items: [
				{
					parentId: 1,
					id: 11,
					name: 'Profile.txt',
					type: 'file_txt',
					render: Profile,
					dragging: false
				},
				{
					parentId: 1,
					id: 12,
					name: 'About.txt',
					type: 'file_txt',
					render: About,
					dragging: false
				},
				{
					parentId: 1,
					id: 13,
					name: 'Education.txt',
					type: 'file_txt',
					render: Education,
					dragging: false
				},
				{
					parentId: 1,
					id: 14,
					name: 'Experience.txt',
					type: 'file_txt',
					render: Experience,
					dragging: false
				},
				{
					parentId: 1,
					id: 15,
					name: 'Skill.txt',
					type: 'file_txt',
					render: Skill,
					dragging: false
				},
				{
					parentId: 1,
					id: 16,
					name: 'Contract.txt',
					type: 'file_txt',
					render: Contract,
					dragging: false
				}
			]
		},
		{
			id: '1',
			name: 'image',
			type: 'folder',
			open: false,
			items: [
				{
					parentId: '1',
					id: '10',
					name: 'anna.js',
					type: 'file_img',
					render: Profile,
					dragging: false
				}
			]
		}
	])

	const [files, setFiles] = useState([])

	const [explorerActive, setExplorerActive] = useState()

	const [fileActive, setFileActive] = useState()

	const checkResize = () => {
		document.documentElement.style.setProperty(
			'--vh',
			`${window.innerHeight * 0.01}px`
		)
	}

	useEffect(() => {
		setInterval(checkResize, 100)
		return () => {
			clearInterval(checkResize)
		}
	}, [])

	const [theme, setTheme] = useState('dark')

	const [lang, setLang] = useState(EN)

	useEffect(() => {
		const _theme = theme === 'dark' ? DarkTheme : LightTheme
		Object.keys(_theme).forEach(key => {
			document.documentElement.style.setProperty(key, _theme[key])
		})
		document.documentElement.style.setProperty('--font', lang.font)
	}, [theme, lang])

	function isMobileDevice() {
		return (
			typeof window.orientation !== 'undefined' ||
			navigator.userAgent.indexOf('IEMobile') !== -1
		)
	}

	const [Render, setRender] = useState()

	return (
		<AppContext.Provider value={{ lang, setLang }}>
			<div
				className='container'
				style={{
					gridTemplateColumns: `${explorerWidth}px ${
						isMobileDevice() ? '0' : '5'
					}px auto`
				}}>
				<Header />
				<AppContext.Provider
					value={{
						files,
						setFiles,
						setRender,
						explorer,
						setExplorer,
						setExplorerActive,
						fileActive,
						setFileActive,
						explorerWidth,
						explorerActive,
						isMobileDevice,
						explorerMinWidth,
						setExplorerWidth
					}}>
					<SubHeader />
					<Explorer />
					<Resizer />
				</AppContext.Provider>
				<Editor props={{ fileActive, files, Render }} />
				<Footer props={{ setTheme, theme, setLang }} />
			</div>
		</AppContext.Provider>
	)
}

export default App
