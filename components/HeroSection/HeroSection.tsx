import styled from "styled-components"
import Navigation from "./components/Navigation"


const Section = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const BackgroundImage = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 50%;
	z-index: -1;
	background-image: url("/hero-background.jpg");
	background-size: cover;
	background-position: center;
	filter: brightness(0.2);
`

const BackgroundColor = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 50%;
	right: 0;
	z-index: -1;
	background-color: black;
`

const TitleContainer = styled.div`
	display: flex;
	flex-direction: column;
`

const Name = styled.h1`
	color: white;
	font-size: 46px;
	font-weight: normal;
	align-self: flex-start;
	line-height: 1;
	margin-bottom: 8px;
`

const Title = styled.p`
	color: #FFCB1E;
	font-size: 72px;
	text-transform: uppercase;
	font-weight: bold;
	line-height: 1;
	margin-bottom: 8px;
`

const Nickname = styled.p`
	color: white;
	font-size: 24px;
	font-weight: normal;
	align-self: flex-end;
	line-height: 1;
`

const ScrollIndicator = styled.div`
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	width: 32px;
	height: 32spx;
	color: white;
`

const HeroSection = () =>
	<Section>
		<BackgroundImage />
		<BackgroundColor />
		<Navigation />
		<TitleContainer>
			<Name>Lukas Wiklund</Name>
			<Title>A Software Engineer.</Title>
			<Nickname>Hadermite</Nickname>
		</TitleContainer>
		<ScrollIndicator>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<line x1="12" y1="5" x2="12" y2="19" />
				<polyline points="19 12 12 19 5 12" />
			</svg>
		</ScrollIndicator>
	</Section>

export default HeroSection
