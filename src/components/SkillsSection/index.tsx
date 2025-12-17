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
	<section className="bg-dark py-24">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mb-16 text-center">
				<h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">What I'm using</h2>
				<div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
			</div>
			<ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
				{skills.map(({ name, logo }, index) => (
					<li key={index} className="group">
						<div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-black/50 to-dark p-8 shadow-lg transition-all duration-500 hover:border-white/20 hover:shadow-xl hover:shadow-white/5">
							<div className="rounded-xl bg-white/5 p-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10">
								<Image
									alt={`${name} logo`}
									src={logo}
									height={56}
									width={56}
									className="transition-transform duration-500"
								/>
							</div>
							<p className="text-lg font-semibold text-white">{name}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default SkillsSection
