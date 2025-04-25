import { NextPage } from "next"
import { NextSeo } from "next-seo"

import ContactSection from "~/components/ContactSection"
import ExperienceSection from "~/components/ExperienceSection"
import HeroSection from "~/components/HeroSection"
import SkillsSection from "~/components/SkillsSection"

const HomePage: NextPage = () => (
	<div className="pb-16">
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
	</div>
)

export default HomePage
