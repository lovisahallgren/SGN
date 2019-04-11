import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios'

const Images = styled.div`
	display: flex;
	width: 76%;
	justify-content: space-around;
	align-items: center;
	margin-top: 3.5rem;
`

export default props => {
	const facebook = '/static/images/facebook.svg'
	const instagram = '/static/images/instagram.svg'
	const youtube = '/static/images/youtube.svg'

	return (
		<Images>
			<a href="/">
				<img src={facebook} alt="" />
			</a>
			<a href="/">
				<img src={youtube} alt="" />
			</a>
			<a href="/">
				<img src={instagram} alt="" />
			</a>
		</Images>
	)
}