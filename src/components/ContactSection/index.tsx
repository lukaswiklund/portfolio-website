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
		name: "lukas@wiklund.se",
		logo: mailLogo,
		link: "mailto:lukas@wiklund.se",
	},
]

const ContactSection: FC = () => (
	<div className="flex flex-col items-center p-12">
		<h2 className="mb-12 text-4xl font-bold">Get in touch</h2>
		<ul className="flex">
			{skills.map(({ name, logo, link }, index) => (
				<li key={index} className="mx-8">
					<a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-dark">
						<Image alt={`${name} logo`} src={logo} width={40} className="mr-4" />
						<p className="text-xl">{name}</p>
					</a>
				</li>
			))}
		</ul>
	</div>
)

export default ContactSection
