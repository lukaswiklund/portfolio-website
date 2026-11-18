import Image from "next/image"

import ContactSection from "~/components/ContactSection"
import ExperienceSection from "~/components/ExperienceSection"
import HeroSection from "~/components/HeroSection"
import picture from "~/components/HeroSection/picture.jpg"
import PersonalProjectsSection from "~/components/PersonalProjectsSection"

import "~/assets/styles.css"

export default function Home() {
	return (
		<div className="lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
			<div className="relative aspect-[4/5] max-h-[85vh] w-full overflow-hidden bg-line lg:sticky lg:top-0 lg:aspect-auto lg:h-screen lg:max-h-none">
				<Image
					alt="Lukas standing on the rocks by the sea at sunset"
					src={picture}
					priority
					placeholder="blur"
					fill
					sizes="(max-width: 1024px) 100vw, 42vw"
					className="object-cover object-[53%_45%]"
				/>
			</div>
			<main className="px-6 py-14 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-24">
				<div className="max-w-2xl">
					<HeroSection />
					<ExperienceSection />
					<PersonalProjectsSection />
					<ContactSection />
				</div>
			</main>
		</div>
	)
}
