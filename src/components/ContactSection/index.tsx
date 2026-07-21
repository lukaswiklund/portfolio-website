import type { FC } from "react"

const links = [
	{ name: "LinkedIn", link: "https://www.linkedin.com/in/lukas-wiklund/" },
	{ name: "GitHub", link: "https://github.com/lukaswiklund/" },
	{ name: "Facebook", link: "https://www.facebook.com/LukasEGWiklund/" },
]

const ContactSection: FC = () => (
	<footer id="contact" className="bg-signal px-5 pt-24 pb-8 text-ink md:px-10 md:pt-32 lg:px-14">
		<div className="mx-auto max-w-[1500px]">
			<p className="eyebrow mb-8">04 / Contact</p>
			<h2 className="section-title max-w-[10ch]">Say hello.</h2>
			<a
				href="mailto:hej@lukaswiklund.se"
				className="arrow-link mt-12 inline-flex items-center gap-4 border-b-2 border-ink pb-2 text-xl font-black tracking-[-0.03em] md:text-4xl"
			>
				hej@lukaswiklund.se <span className="arrow">↗</span>
			</a>

			<div className="mt-24 flex flex-col gap-8 border-t border-ink/30 pt-7 md:mt-36 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="text-xl font-black tracking-[-0.04em]">Lukas Wiklund</p>
					<p className="mt-1 font-body text-sm">Software engineer & founder</p>
				</div>
				<ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
					{links.map(({ name, link }) => (
						<li key={name}>
							<a
								className="arrow-link"
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{name} <span className="arrow">↗</span>
							</a>
						</li>
					))}
				</ul>
				<p className="font-body text-xs">
					© {new Date().getFullYear()} · Linköping, Sweden
				</p>
			</div>
		</div>
	</footer>
)

export default ContactSection
