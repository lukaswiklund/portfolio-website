import styled from "styled-components"

const Container = styled.nav`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding: 42px 0;
`

const Button = styled.a`
	color: white;
	font-family: "Open Sans", sans-serif;
	font-size: 16px;
	text-decoration: none;
	transition: 0.2s color;
	padding: 26px;

	&:hover {
		color: #cdcdcd;
	}
`

const Navigation = () => (
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
)

export default Navigation
