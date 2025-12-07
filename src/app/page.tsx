import { Analytics } from "@vercel/analytics/next"

import "~/assets/styles.css"
import ContactSection from "~/components/ContactSection"
import ExperienceSection from "~/components/ExperienceSection"
import HeroSection from "~/components/HeroSection"
import SkillsSection from "~/components/SkillsSection"

export default function Home() {
	return (
		<>
			<Analytics />
			<div className="pb-16">
				<HeroSection />
				<ExperienceSection />
				<SkillsSection />
				<ContactSection />
			</div>
		</>
	)
}
