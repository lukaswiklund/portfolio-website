import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import cosunoLogo from "./logos/cosuno.svg"
import forentoLogo from "./logos/forento.svg"
import inetLogo from "./logos/inet.svg"

const workItems = [
	{
		name: "Forento",
		logo: forentoLogo,
		link: "https://forento.io",
		description:
			"SaaS platform that lets users create their very own custom branded online course & digital content monetization platform.",
	},
	{
		name: "Cosuno",
		logo: cosunoLogo,
		link: "https://www.cosuno.com",
		description:
			"SaaS platform to manage the entire planning cycle and benefit from a one-size-fits-all solution for all planning needs for the construction industry.",
	},
	{
		name: "Inet",
		logo: inetLogo,
		link: "https://www.inet.se/",
		description: "Web shop and retail system for Sweden's most loved computer store brand.",
	},
]

const ExperienceSection: FC = () => (
	<div className="flex flex-col items-center p-12">
		<h2 className="mb-12 text-4xl font-bold">What I've done</h2>
		<ul className="flex gap-8">
			{workItems.map(({ name, logo, link, description }, index) => (
				<li key={index} className="flex w-[320px] flex-col">
					<Link href={link} target="_blank" rel="noopener noreferrer" className="mb-6 self-center">
						<Image
							className="h-[70px] w-[240px]"
							alt={`${name}'s logo`}
							src={logo}
							width={240}
							height={70}
							style={{ objectFit: "contain" }}
						/>
					</Link>
					<h3 className="mb-2 font-bold text-dark">{name}</h3>
					<p className="text-light">{description}</p>
				</li>
			))}
		</ul>
	</div>
)

export default ExperienceSection
