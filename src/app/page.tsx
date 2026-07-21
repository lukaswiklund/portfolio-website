import { Analytics } from "@vercel/analytics/next"

import ContactSection from "~/components/ContactSection"
import ExperienceSection from "~/components/ExperienceSection"
import HeroSection from "~/components/HeroSection"
import PersonalProjectsSection from "~/components/PersonalProjectsSection"
import SkillsSection from "~/components/SkillsSection"

import "~/assets/styles.css"

export default function Home() {
	return (
		<>
			<Analytics />
			<HeroSection />
			<ExperienceSection />
			<PersonalProjectsSection />
			<SkillsSection />
			<ContactSection />
		</>
	)
}
