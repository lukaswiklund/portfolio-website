import { useEffect } from "react"
import styled from "styled-components"
import { tsParticles } from "tsparticles"

import Navigation from "./components/Navigation"


const Section = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
`

const Particles = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: -1;
	background-color: black;
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
	useEffect(() => {
		tsParticles.load("hero-particles", {
			particles: {
				number: {
					value: 25,
					density: {
						enable: true,
						value_area: 1000
					}
				},
				color: {
					value: "#ffffff"
				},
				size: {
					value: 0,
					anim: {
						enable: false,
						speed: 40,
						size_min: 0.1,
						sync: false
					}
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1
				},
				move: {
					enable: true,
					speed: 2,
					direction: "none",
					random: false,
					straight: false,
					out_mode: "out",
					bounce: false,
					attract: {
						enable: false,
						rotateX: 600,
						rotateY: 1200
					}
				}
			},
			retina_detect: true
		})
	}, [])

	return <Section>
		<Particles id="hero-particles" />
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
