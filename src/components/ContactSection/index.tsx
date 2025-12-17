import Image from "next/image"
import { FC } from "react"

import facebookLogo from "./logos/facebook.svg"
import githubLogo from "./logos/github.svg"
import linkedInLogo from "./logos/linkedin.svg"
import mailLogo from "./logos/mail.svg"

const skills = [
	{
		name: "Lukas Wiklund",
		logo: linkedInLogo,
		link: "https://www.linkedin.com/in/lukas-wiklund/",
	},
	{
		name: "lukaswiklund",
		logo: githubLogo,
		link: "https://github.com/lukaswiklund/",
	},
	{
		name: "Lukas Wiklund",
		logo: facebookLogo,
		link: "https://www.facebook.com/LukasEGWiklund/",
	},
	{
		name: "hej@lukaswiklund.se",
		logo: mailLogo,
		link: "mailto:hej@lukaswiklund.se",
	},
]

const ContactSection: FC = () => (
	<section className="bg-black py-24">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mb-16 text-center">
				<h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">Get in touch</h2>
				<div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
			</div>
			<ul className="flex flex-wrap justify-center gap-4 lg:gap-6">
				{skills.map(({ name, logo, link }, index) => (
					<li key={index}>
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-linear-to-br from-dark to-black px-8 py-5 shadow-lg transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-white/5"
						>
							<div className="rounded-lg bg-white/5 p-2 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
								<Image
									alt={`${name} logo`}
									src={logo}
									width={28}
									height={28}
									className="transition-transform duration-500"
								/>
							</div>
							<p className="text-lg font-semibold text-white">{name}</p>
						</a>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default ContactSection
