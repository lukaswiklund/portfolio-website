import styled from "styled-components"

import Navigation from "./components/Navigation"


const HeroSection = () =>
	<Section>
		<Navigation />
		<Container>
			<Picture />
			<ContentWrapper>
				<Content>
					<TitleContainer>
						Hi, I'm
						<Title>Lukas Wiklund</Title>
					</TitleContainer>
					<Subtitle>A Software Developer based in Gothenburg, Sweden.</Subtitle>
				</Content>
			</ContentWrapper>
		</Container>
	</Section>

const Section = styled.section`
	position: relative;
	width: 100%;
	background-color: #1B1B1B;
`

const Container = styled.div`
	display: flex;
	height: 70vh;
`

const Picture = styled.div`
	flex-basis: 30%;
	background-image: url("/lukas.png");
	background-repeat: no-repeat;
	background-position: 0 100%;
	background-size: 100%;
`

const ContentWrapper = styled.div`
	flex-basis: 70%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const TitleContainer = styled.div`
	color: white;
	font-size: 6.7vw;
	font-weight: 900;
	line-height: 1;
	margin-bottom: 2vw;
`

const Title = styled.h1`
	font-size: 6.7vw;
	font-weight: 900;
	line-height: 1;
	display: block;
	margin-left: 2vw;
`

const Subtitle = styled.p`
	color: white;
	font-size: 1.6vw;
	align-self: flex-start;
	margin-bottom: 1.6vw;
`

export default HeroSection
