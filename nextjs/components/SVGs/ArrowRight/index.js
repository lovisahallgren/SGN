import styled from 'styled-components'

const Image = styled.div`
	/* display: flex; */
	width: 7%;
  margin: -1.5rem 1rem 0 1rem;
	/* justify-content: space-around; */
	/* align-items: center; */
	/* margin-top: 3.5rem; */
`

export default props => {
	const arrowRight = '/static/images/sgn_symbol_arrow-right.svg'

	return (
		<Image>
			<img src={arrowRight} alt="" />
		</Image>
	)
}
