import Link from "next/link"
import { FC } from "react"

const projects = [
	{
		name: "Nuclear",
		link: "https://nuclear.lukaswiklund.se",
		description: "A personal project showcasing nuclear energy information and data visualization.",
	},
]

const PersonalProjectsSection: FC = () => (
	<section className="bg-linear-to-b from-dark to-black py-24">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mb-16 text-center">
				<h2 className="mb-4 text-5xl font-bold text-white lg:text-6xl">Personal projects</h2>
				<div className="mx-auto h-1 w-24 rounded-full bg-linear-to-r from-transparent via-white/30 to-transparent" />
			</div>
			<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{projects.map(({ name, link, description }, index) => (
					<li key={index} className="group">
						<Link
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-dark to-black p-8 shadow-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
						>
							<div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
							<div className="relative mb-4">
								<h3 className="text-3xl font-bold text-white transition-colors duration-300 group-hover:text-hover">
									{name}
								</h3>
							</div>
							<p className="relative mb-6 grow text-base leading-relaxed text-light">{description}</p>
							<div className="relative flex items-center gap-2 text-sm font-medium text-white/60 opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100">
								<span>Visit project</span>
								<span className="text-lg">→</span>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default PersonalProjectsSection
