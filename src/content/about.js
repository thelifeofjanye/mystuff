import { rendered } from './_render'

const stuff = {
	about: [
		{
			name: 'เจ Jay'
		},
		{
			name: 'เพศ ชาย'
		},
		{
			name: 'เกิด'
		},
		{
			name: 'คร่าวๆ'
		}
	]
}

export const About = () => {
	return rendered(stuff)
}
