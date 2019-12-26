import { rendered } from './_render'

const stuff = {
	contract: [
		{
			name: 'Tel'
		},
		{
			name: 'Email'
		},
		{
			name: 'Face'
		},
		{
			name: 'Github'
		}
	]
}

export const Contract = () => {
	return rendered(stuff)
}
