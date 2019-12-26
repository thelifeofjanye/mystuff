import { rendered } from './_render'

const stuff = {
	profile: [
		{
			name: '[Profile Pic]'
		},
		{
			name: 'About'
		},
		{
			name: 'Education'
		},
		{
			name: 'Exp',
			proficiency: 'great'
		},
		{
			name: 'Contract',
			proficiency: 'great'
		},
		{
			name: 'Contract',
			proficiency: 'great'
		}
	]
}
export const Profile = () => {
	return rendered(stuff)
}
