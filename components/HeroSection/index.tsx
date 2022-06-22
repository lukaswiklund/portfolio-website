import styled from "@emotion/styled"

import Navigation from "./Navigation"

import picture from "./picture.png"

const HeroSection: React.FC = () => (
	<Section>
		<Navigation />
		<Container>
			<Picture alt="Picture" src={picture.src} />
			<ContentWrapper>
				<Content>
					<TitleContainer>
						Hi, I'm
						<Title>Lukas Wiklund</Title>
					</TitleContainer>
					<Subtitle>A Software Engineer based in Gothenburg, Sweden.</Subtitle>
				</Content>
			</ContentWrapper>
		</Container>
	</Section>
)

const Section = styled.section`
	position: relative;
	background-color: #1b1b1b;
`

const Container = styled.div`
	display: flex;
	height: 70vh;
`

const Picture = styled.img`
	width: 30%;
	flex: 0 0 auto;
	object-fit: contain;
	object-position: bottom left;
`

const ContentWrapper = styled.div`
	width: 70%;
	flex: 0 0 auto;
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
