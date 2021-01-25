import styled from "styled-components"


const Container = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 42px 0;
`

const Button = styled.a`
	color: white;
	font-size: 16px;
	text-decoration: none;
	transition: .2s color;
	padding: 26px;

	&:hover {
		color: #cdcdcd;
	}
`

const Navigation = () =>
	<Container>
		<Button target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/lukas-wiklund/">
			LinkedIn
		</Button>
		<Button target="_blank" rel="noopener noreferrer" href="https://github.com/Hadermite">
			GitHub
		</Button>
		<Button target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LukasEGWiklund/">
			Facebook
		</Button>
	</Container>

export default Navigation
