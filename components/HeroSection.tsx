import styled from "styled-components"


const Section = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url("/hero-background.jpg");
	background-size: cover;
	background-position: center;
`

const TextContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.4);
	padding: 26px 46px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Title = styled.h1`
	color: white;
	font-size: 92px;
	font-weight: 700;
	line-height: 1.3;
`

const Subtitle = styled.p`
	width: 800px;
	color: white;
	font-size: 36px;
	text-align: center;
	line-height: 1.2;
`

const BackgroundCredits = styled.a`
	position: absolute;
	right: 0;
	bottom: 0;
	color: white;
	background-color: rgba(0, 0, 0, 0.4);
	padding: 8px 16px;
	text-decoration: none;
`

const ScrollIndicator = styled.div`
	position: absolute;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	width: 56px;
	height: 56px;
	color: white;
`

const HeroSection = () =>
	<Section>
		<TextContainer>
			<Title>Lukas Wiklund</Title>
			<Subtitle>Software Engineer based in Gothenburg, Sweden with experience since my early 10s.</Subtitle>
		</TextContainer>
		<BackgroundCredits href="https://www.google.com/maps/place/Folhammar+Rauk+area/@57.3470591,18.7359877,17z" target="_blank" rel="noreferrer noopener">
			Folhammar Rauk Area, Island of Gotland, Sweden
		</BackgroundCredits>
		<ScrollIndicator>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<line x1="12" y1="5" x2="12" y2="19" />
				<polyline points="19 12 12 19 5 12" />
			</svg>
		</ScrollIndicator>
	</Section>

export default HeroSection
