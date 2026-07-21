import type { FC } from "react"

const projects = [
	{
		name: "Nordic Nuclear Power",
		link: "https://www.nordiskkarnkraft.se/en/se",
		description:
			"An independent, real-time view of every nuclear reactor in Sweden and Finland.",
		label: "Energy data",
		color: "bg-[#92b2a4]",
	},
	{
		name: "BRF Radar",
		link: "https://brfradar.se/",
		description:
			"Housing cooperative analysis that surfaces financial risks before you buy an apartment.",
		label: "PropTech",
		color: "bg-sun",
	},
	{
		name: "Sveriges Ekonomi",
		link: "https://sverigesekonomi.se/",
		description: "Tools and open data for making Sweden’s public and private economy legible.",
		label: "Public data",
		color: "bg-signal",
	},
]

const PersonalProjectsSection: FC = () => (
	<section id="projects" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-32 lg:px-14">
		<div className="mx-auto max-w-[1500px]">
			<div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="eyebrow mb-5 text-sun">02 / Built out of curiosity</p>
					<h2 className="section-title max-w-[8ch]">Independent projects.</h2>
				</div>
				<p className="max-w-sm font-body text-lg leading-relaxed text-paper/60">
					Small, focused products that turn complicated Swedish data into something people
					can actually use.
				</p>
			</div>

			<ul className="grid gap-px overflow-hidden border border-paper/20 bg-paper/20 lg:grid-cols-3">
				{projects.map(({ name, link, description, label, color }, index) => (
					<li key={name} className="group bg-ink">
						<a
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex min-h-[420px] flex-col justify-between p-7 md:p-9 lg:min-h-[500px]"
						>
							<div>
								<div className="mb-14 flex items-center justify-between">
									<span className="eyebrow text-paper/50">0{index + 1}</span>
									<span className={`h-4 w-4 rounded-full ${color}`} />
								</div>
								<p className="eyebrow mb-5 text-paper/50">{label}</p>
								<h3 className="max-w-[9ch] text-4xl leading-[0.92] font-black tracking-[-0.06em] md:text-5xl">
									{name}
								</h3>
							</div>
							<div>
								<p className="mb-8 max-w-sm font-body leading-relaxed text-paper/60">
									{description}
								</p>
								<div className="flex items-end justify-between border-t border-paper/20 pt-5">
									<span className="text-sm font-bold">Explore project</span>
									<span
										className="text-3xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
										aria-hidden="true"
									>
										↗
									</span>
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</div>
	</section>
)

export default PersonalProjectsSection
