import { NextPage } from "next"
import { NextSeo } from "next-seo"
import styled from "@emotion/styled"

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
