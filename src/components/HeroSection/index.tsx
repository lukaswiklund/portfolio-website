import Image from "next/image"
import type { FC } from "react"

import picture from "./picture.jpg"

const HeroSection: FC = () => (
	<header
		id="top"
		className="relative min-h-screen overflow-hidden border-b border-ink/20 bg-paper"
	>
		<div className="paper-grain absolute inset-0 z-20 opacity-[0.09]" />
		<nav className="relative z-30 flex items-center justify-between border-b border-ink/20 px-5 py-4 md:px-10 lg:px-14">
			<a href="#top" className="text-lg font-black tracking-[-0.05em]" aria-label="Home">
				LW<span className="text-signal">.</span>
			</a>
			<div className="flex items-center gap-5 text-sm font-bold md:gap-8">
				<a className="transition-colors hover:text-signal" href="#work">
					Work
				</a>
				<a className="transition-colors hover:text-signal" href="#projects">
					Projects
				</a>
				<a className="transition-colors hover:text-signal" href="#contact">
					Contact
				</a>
			</div>
		</nav>

		<div className="relative grid min-h-[calc(100vh-61px)] lg:grid-cols-[1.25fr_0.75fr]">
			<div className="relative z-10 flex flex-col justify-between px-5 py-10 md:px-10 md:py-14 lg:px-14 lg:py-16">
				<div className="reveal flex items-center gap-3">
					<span className="h-2.5 w-2.5 rounded-full bg-signal" />
					<p className="eyebrow">Software engineer · Founder · Sweden</p>
				</div>

				<div className="py-16 lg:py-10">
					<p className="reveal reveal-delay-1 mb-4 text-xl font-bold md:text-2xl">
						Hello, I’m
					</p>
					<h1 className="display-title reveal reveal-delay-2 max-w-[7ch]">
						Lukas
						<br />
						Wiklund<span className="text-signal">.</span>
					</h1>
				</div>

				<div className="reveal reveal-delay-3 grid gap-8 border-t border-ink/30 pt-6 md:grid-cols-[1fr_auto] md:items-end">
					<p className="max-w-xl text-xl leading-snug font-bold md:text-2xl">
						I build useful digital products and the companies behind them.
					</p>
					<a
						href="#work"
						className="arrow-link flex h-14 w-14 items-center justify-center rounded-full bg-ink text-2xl text-paper transition-transform hover:rotate-45"
					>
						<span className="sr-only">See my work</span>
						<span className="arrow" aria-hidden="true">
							↘
						</span>
					</a>
				</div>
			</div>

			<div className="relative min-h-[560px] overflow-hidden bg-sun md:min-h-[720px] lg:min-h-full">
				<Image
					alt="Lukas Wiklund on the rocks by the sea at sunset"
					src={picture}
					priority
					placeholder="blur"
					sizes="(max-width: 1024px) 100vw, 40vw"
					className="absolute inset-0 h-full w-full object-cover object-[53%_42%]"
				/>
				<div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-linear-to-t from-ink/60 to-transparent" />
				<div className="absolute top-8 right-6 z-10 rounded-full border border-ink/20 bg-paper/75 px-4 py-2 text-xs font-bold tracking-wide uppercase backdrop-blur-sm md:right-10">
					Based in Linköping
				</div>
				<p className="absolute right-4 bottom-5 z-20 max-w-40 text-right text-sm leading-tight font-bold text-paper md:right-8">
					Gothenburg roots.
					<br />
					Spanish winters.
				</p>
			</div>
		</div>
	</header>
)

export default HeroSection
