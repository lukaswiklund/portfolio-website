import { NextPage } from "next"
import Head from "next/head"
import styled from "styled-components"
import { NextSeo } from "next-seo"

import HeroSection from "components/HeroSection/HeroSection"
import ExperienceSection from "components/HeroSection/ExperienceSection"
import SkillsSection from "components/HeroSection/SkillsSection"
import ContactSection from "components/HeroSection/ContactSection"

const HomePage: NextPage = () => (
	<Container>
		<NextSeo
			title="Lukas Wiklund"
			description="Hi, I'm Lukas Wiklund. A Software Engineer based in Gothenburg, Sweden."
			openGraph={{
				images: [{ url: "/lukas.png", width: 1536, height: 2048 }],
			}}
		/>
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900"
			/>
		</Head>

		<HeroSection />
		<ExperienceSection />
		<SkillsSection />
		<ContactSection />
	</Container>
)

const Container = styled.div`
	padding-bottom: 300px;
`

export default HomePage
