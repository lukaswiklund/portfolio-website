import styled from "styled-components"


const Container = styled.nav`
	position: absolute;
	top: 25%;
	left: 50%;
	bottom: 0;
	right: 0;
	padding: 0 64px;
`

const Button = styled.a`
	color: white;
	text-decoration: none;
	transition: .2s color;

	&:not(:last-child) {
		margin-right: 46px;
	}

	&:hover {
		color: #cdcdcd;
	}
`

const Navigation = () =>
	<Container>
		<Button href="#">Home</Button>
		<Button href="#">Projects</Button>
		<Button href="#">About Me</Button>
		<Button href="#">LinkedIn</Button>
	</Container>

export default Navigation
