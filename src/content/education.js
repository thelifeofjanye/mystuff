import { rendered } from './_render'

const stuff = {
	education: [
		{
			name: 'university name'
		},
		{
			name: 'degreee'
		},
		{
			name: 'GPA'
		},
		{
			name: 'period'
		}
	]
}

export const Education = () => {
	return rendered(stuff)
}
