import styled from "styled-components"

import Navigation from "./components/Navigation"


const Section = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	background-color: black;
`

const Particles = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-image: url("/hero-background.svg");
	background-size: cover;
	pointer-events: none;
`

const ContentWrapper = styled.div`
	flex-basis: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
`

const Title = styled.h1`
	color: white;
	font-family: "Overpass", sans-serif;
	font-size: 6.7vw;
	font-weight: 900;
	line-height: 1;
	margin-bottom: 0.8vw;
`

const Name = styled.span`
	display: block;
	margin-left: 2vw;
`

const Subtitle = styled.p`
	color: white;
	font-family: "Overpass", sans-serif;
	font-size: 1.6vw;
	text-transform: lowercase;
	align-self: flex-start;
	margin-bottom: 1.6vw;
`

const Picture = styled.div`
	flex-basis: 50%;
	background-image: url("/lukas.png");
	background-repeat: no-repeat;
	background-position: 50% 60%;
	background-size: 60%;
`

const HeroSection = () => {
	return <Section>
		<Particles />
		<Navigation />
		<ContentWrapper>
			<Content>
				<Title>
					Hi, I'm
					<Name>Lukas W.</Name>
				</Title>
				<Subtitle>A Software Engineer</Subtitle>
			</Content>
		</ContentWrapper>
		<Picture />
	</Section>
}

export default HeroSection
