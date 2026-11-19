import type { FC } from "react"

const HeroSection: FC = () => (
	<header>
		<h1 className="text-5xl font-bold tracking-tight md:text-6xl">Lukas Wiklund</h1>
		<p className="mt-8 text-xl leading-relaxed md:text-2xl">
			Hi! I'm a software engineer turned startup founder. I've been programming since I was
			ten, and what I enjoy most is building things: solving real problems and making
			something people find useful. These days most of my time goes into{" "}
			<a href="https://forento.io">Forento</a>.
		</p>
		<p className="mt-5">
			On the side I build small websites that make Swedish data easier to look at. I've long
			been fascinated by electricity grids and electrification, which is how{" "}
			<a href="https://www.nordiskkarnkraft.se/en/se">Nordic Nuclear Power</a> got started,
			and why I'm making{" "}
			<a href="https://www.inlakeinteractive.com/">High Voltage Republic</a>, a game where you
			run a colony's power grid.
		</p>
		<p className="mt-5 text-muted">
			I grew up in Gothenburg and live in Linköping. Outside of work I'm usually building
			something new, or off somewhere in Sweden, often Dalarna or Gotland. I mostly write
			TypeScript: React on the frontend, Node.js and SQL on the backend.
		</p>
	</header>
)

export default HeroSection
