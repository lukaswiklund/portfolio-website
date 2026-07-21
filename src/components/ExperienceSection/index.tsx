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
		meta: "Founder · EdTech SaaS",
		description:
			"A platform that gives creators everything they need to launch their own branded online course and digital content business.",
	},
	{
		name: "Cosuno",
		logo: cosunoLogo,
		link: "https://www.cosuno.com",
		meta: "Software engineer · ConTech",
		description:
			"A collaborative SaaS product that modernises tendering and procurement for the construction industry.",
	},
	{
		name: "Inet",
		logo: inetLogo,
		link: "https://www.inet.se/",
		meta: "Software engineer · Commerce",
		description: "The web shop and retail systems behind Sweden’s most loved computer store.",
	},
]

const ExperienceSection: FC = () => (
	<section id="work" className="relative bg-paper-light px-5 py-24 md:px-10 md:py-32 lg:px-14">
		<div className="mx-auto max-w-[1500px]">
			<div className="grid gap-10 pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
				<div>
					<p className="eyebrow mb-5 text-signal">01 / Selected experience</p>
					<h2 className="section-title">Work that moved things forward.</h2>
				</div>
				<p className="max-w-xl text-lg leading-relaxed text-muted lg:ml-auto lg:text-xl">
					From retail systems to construction software and creator tools, I work where
					product, engineering and business meet.
				</p>
			</div>

			<ul className="border-t border-ink">
				{workItems.map(({ name, logo, link, meta, description }, index) => (
					<li key={name}>
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="group grid gap-6 border-b border-ink/30 py-8 transition-colors hover:bg-sun/15 md:grid-cols-[70px_1fr_1.2fr_42px] md:items-center md:px-4 lg:py-10"
						>
							<p className="font-body text-sm text-muted">0{index + 1}</p>
							<div>
								<div className="mb-4 flex h-8 items-center justify-start">
									<Image
										src={logo}
										alt=""
										className="max-h-8 w-auto max-w-28 object-contain object-left brightness-0"
									/>
								</div>
								<h3 className="text-3xl font-black tracking-[-0.04em] md:text-4xl">
									{name}
								</h3>
								<p className="eyebrow mt-2 text-muted">{meta}</p>
							</div>
							<p className="max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
								{description}
							</p>
							<span
								className="text-3xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
								aria-hidden="true"
							>
								↗
							</span>
						</a>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default ExperienceSection
