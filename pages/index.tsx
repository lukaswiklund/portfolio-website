import { NextPage } from "next"
import { NextSeo } from "next-seo"
import styled from "@emotion/styled"

import HeroSection from "components/HeroSection"
import ExperienceSection from "components/ExperienceSection"
import SkillsSection from "components/SkillsSection"
import ContactSection from "components/ContactSection"

const HomePage: NextPage = () => (
	<Container>
		<NextSeo
			title="Lukas Wiklund"
			description="Hi, I'm Lukas Wiklund. A Software Engineer based in Gothenburg, Sweden."
			canonical="https://lukaswiklund.se"
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
