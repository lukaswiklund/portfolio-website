import styled from "@emotion/styled"
import Image from "next/image"

import Navigation from "./Navigation"

import picture from "./picture.png"

const HeroSection: React.FC = () => (
	<Section>
		<Navigation />
		<Container>
			<PictureContainer>
				<Image alt="Picture" src={picture} layout="fill" objectFit="contain" objectPosition="bottom left" />
			</PictureContainer>
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

const PictureContainer = styled.div`
	flex: 0 0 30%;
	position: relative;
`

const ContentWrapper = styled.div`
	flex: 0 0 70%;
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
