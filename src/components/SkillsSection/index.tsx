import Image from "next/image"
import type { FC } from "react"

import nodejsLogo from "./logos/nodejs.svg"
import reactLogo from "./logos/react.svg"
import sqlLogo from "./logos/sql.svg"
import typescriptLogo from "./logos/typescript.svg"

const skills = [
	{ name: "React", logo: reactLogo, number: "01" },
	{ name: "Node.js", logo: nodejsLogo, number: "02" },
	{ name: "TypeScript", logo: typescriptLogo, number: "03" },
	{ name: "SQL", logo: sqlLogo, number: "04" },
]

const SkillsSection: FC = () => (
	<section className="relative overflow-hidden border-b border-ink/20 bg-paper py-24 md:py-32">
		<div className="paper-grain absolute inset-0 opacity-[0.08]" />
		<div className="relative mx-auto max-w-[1500px] px-5 md:px-10 lg:px-14">
			<div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
				<div>
					<p className="eyebrow mb-5 text-signal">03 / The toolkit</p>
					<h2 className="section-title max-w-[7ch]">Built for the whole product.</h2>
					<p className="mt-8 max-w-md font-body text-lg leading-relaxed text-muted">
						I care about the space between a clean data model, a fast interface and a
						product people choose to return to.
					</p>
				</div>

				<ul className="grid grid-cols-2 border-t border-l border-ink/30">
					{skills.map(({ name, logo, number }) => (
						<li
							key={name}
							className="group relative flex aspect-square flex-col justify-between overflow-hidden border-r border-b border-ink/30 p-5 transition-colors hover:bg-sun md:p-8"
						>
							<span className="eyebrow text-muted">{number}</span>
							<Image
								src={logo}
								alt=""
								className="absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0 md:h-20 md:w-20"
							/>
							<p className="text-xl font-black tracking-[-0.04em] md:text-3xl">
								{name}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
)

export default SkillsSection
