import { rendered } from './_render'

const stuff = {
	skills: [
		{
			name: {
				text: 'JavaScript',
				color: '#fff'
			},
			proficiency: 'great'
		},
		{
			name: 'React',
			proficiency: false
		},
		{
			name: 'Redux',
			proficiency: 'great'
		},
		{
			name: 'HTML',
			proficiency: 'great'
		},
		{
			name: 'CSS',
			proficiency: 'great'
		},
		{
			name: 'MySQL',
			proficiency: 'great'
		},
		{
			name: 'jQuery',
			proficiency: 'asfasf'
		},
		{
			name: 'PHP Frameworks',
			frameworks: [
				{
					name: 'Codeigniter',
					proficiency: 'great'
				},
				{
					name: 'Yii2',
					proficiency: 'great'
				}
			]
		},
		{
			name: 'Git',
			proficiency: 'great'
		},
		{
			name: 'GitHub',
			proficiency: 'great'
		}
	]
}

export const Skill = () => {
	return rendered(stuff)
}
