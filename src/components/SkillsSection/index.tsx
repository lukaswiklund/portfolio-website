import Image from "next/image"
import { FC } from "react"

import nodejsLogo from "./logos/nodejs.svg"
import reactLogo from "./logos/react.svg"
import sqlLogo from "./logos/sql.svg"
import typescriptLogo from "./logos/typescript.svg"

const skills = [
	{ name: "React", logo: reactLogo },
	{ name: "NodeJS", logo: nodejsLogo },
	{ name: "TypeScript", logo: typescriptLogo },
	{ name: "SQL", logo: sqlLogo },
]

const SkillsSection: FC = () => (
	<div className="flex flex-col items-center p-12">
		<h2 className="mb-12 text-4xl font-bold">What I'm using</h2>
		<ul className="flex">
			{skills.map(({ name, logo }, index) => (
				<li key={index} className="mx-8 flex items-center text-dark">
					<Image alt={`${name} logo`} src={logo} height={40} className="mr-4" />
					<p className="text-xl">{name}</p>
				</li>
			))}
		</ul>
	</div>
)

export default SkillsSection
