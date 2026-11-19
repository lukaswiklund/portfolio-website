import Image from "next/image"
import type { FC } from "react"

import brfRadar from "./screenshots/brf-radar.png"
import inlakeInteractive from "./screenshots/inlake-interactive.jpg"
import nordicNuclearPower from "./screenshots/nordic-nuclear-power.png"
import sverigesEkonomi from "./screenshots/sveriges-ekonomi.png"

const projects = [
	{
		name: "Inlake Interactive",
		link: "https://www.inlakeinteractive.com/",
		screenshot: inlakeInteractive,
		description:
			"The game studio behind High Voltage Republic, where you run a colony's power grid. It's in open beta right now.",
	},
	{
		name: "Nordic Nuclear Power",
		link: "https://www.nordiskkarnkraft.se/en/se",
		screenshot: nordicNuclearPower,
		description: "Live status of the nuclear reactors in Sweden and Finland.",
	},
	{
		name: "Sveriges Ekonomi",
		link: "https://sverigesekonomi.se/",
		screenshot: sverigesEkonomi,
		description: "Tools and data for exploring Sweden's public and private economy.",
	},
	{
		name: "BRF Radar",
		link: "https://brfradar.se/",
		screenshot: brfRadar,
		description:
			"Goes through a housing cooperative's finances and points out risks and likely fee increases before you buy an apartment.",
	},
]

const PersonalProjectsSection: FC = () => (
	<section className="mt-20">
		<h2 className="text-2xl font-bold">Side projects</h2>
		<ul className="mt-6 space-y-10">
			{projects.map(({ name, link, screenshot, description }) => (
				<li key={name} className="grid gap-4 sm:grid-cols-[15rem_1fr] sm:gap-6">
					<a
						href={link}
						className="block overflow-hidden rounded-md border border-line transition-transform hover:-rotate-1"
					>
						<Image
							src={screenshot}
							alt={`Screenshot of ${name}`}
							placeholder="blur"
							sizes="(max-width: 640px) 100vw, 240px"
						/>
					</a>
					<div>
						<p className="font-bold">
							<a href={link}>{name}</a>
						</p>
						<p className="mt-1 text-muted">{description}</p>
					</div>
				</li>
			))}
		</ul>
	</section>
)

export default PersonalProjectsSection
