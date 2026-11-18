import type { FC } from "react"

const HeroSection: FC = () => (
	<header>
		<h1 className="text-5xl font-bold tracking-tight md:text-6xl">Lukas Wiklund</h1>
		<p className="mt-8 text-xl leading-relaxed md:text-2xl">
			Hi! I'm a software engineer turned startup founder. These days most of my time goes into{" "}
			<a href="https://forento.io">Forento</a>, and on the side I build small websites that
			make Swedish data easier to look at.
		</p>
		<p className="mt-5 text-muted">
			I grew up in Gothenburg, live in Linköping and spend the winters in Spain. I mostly
			write TypeScript: React on the frontend, Node.js and SQL on the backend.
		</p>
	</header>
)

export default HeroSection
