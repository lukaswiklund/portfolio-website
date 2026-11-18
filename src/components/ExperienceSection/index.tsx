import Image from "next/image"
import type { FC } from "react"

import cosunoLogo from "./logos/cosuno.svg"
import forentoLogo from "./logos/forento.svg"
import inetLogo from "./logos/inet.svg"

const workItems = [
	{
		name: "Forento",
		logo: forentoLogo,
		link: "https://forento.io",
		role: "Founder",
		description:
			"A platform for creators who want to sell online courses and digital content under their own brand.",
	},
	{
		name: "Cosuno",
		logo: cosunoLogo,
		link: "https://www.cosuno.com",
		role: "Software engineer",
		description: "Tendering and procurement software for the construction industry.",
	},
	{
		name: "Inet",
		logo: inetLogo,
		link: "https://www.inet.se/",
		role: "Software engineer",
		description: "The web shop and retail system for Sweden's most loved computer store.",
	},
]

const ExperienceSection: FC = () => (
	<section className="mt-20">
		<h2 className="text-2xl font-bold">Work</h2>
		<ul className="mt-6 border-t border-line">
			{workItems.map(({ name, logo, link, role, description }) => (
				<li
					key={name}
					className="grid gap-3 border-b border-line py-6 sm:grid-cols-[8rem_1fr] sm:gap-8"
				>
					<a href={link} className="flex h-7 items-center sm:mt-0.5">
						<Image
							src={logo}
							alt={name}
							className="h-6 w-auto max-w-32 brightness-0 dark:invert"
						/>
					</a>
					<div>
						<p className="font-bold">
							{role} at <a href={link}>{name}</a>
						</p>
						<p className="mt-1 text-muted">{description}</p>
					</div>
				</li>
			))}
		</ul>
	</section>
)

export default ExperienceSection
