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
	<section className="bg-linear-to-b from-black to-dark py-24">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mb-16 text-center">
				<h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">What I've done</h2>
				<div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
			</div>
			<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{workItems.map(({ name, logo, link, description }, index) => (
					<li key={index} className="group">
						<Link
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-dark to-black p-8 shadow-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
						>
							<div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
							<div className="relative mb-6 flex items-center justify-center rounded-lg bg-white/5 p-4">
								<Image
									className="h-[60px] w-auto transition-transform duration-500 group-hover:scale-110"
									alt={`${name}'s logo`}
									src={logo}
									width={240}
									height={70}
									style={{ objectFit: "contain" }}
								/>
							</div>
							<h3 className="relative mb-4 text-2xl font-bold text-white">{name}</h3>
							<p className="relative grow text-base leading-relaxed text-light">{description}</p>
							<div className="relative mt-6 flex items-center text-sm font-medium text-white/60 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
								Visit →
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default ExperienceSection
