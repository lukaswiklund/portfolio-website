import Image from "next/image"
import { FC } from "react"

import picture from "./picture.png"

const HeroSection: FC = () => (
	<section className="relative overflow-hidden bg-linear-to-br from-black via-black to-dark">
		<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
		<div className="relative z-10 flex items-center justify-end gap-4 px-6 py-8 lg:px-12">
			<Button label="LinkedIn" href="https://www.linkedin.com/in/lukas-wiklund/" />
			<Button label="GitHub" href="https://github.com/Hadermite" />
			<Button label="Facebook" href="https://www.facebook.com/LukasEGWiklund/" />
		</div>
		<div className="flex flex-col lg:flex-row xl:min-h-[70vh]">
			<Image
				alt="Picture of Lukas"
				src={picture}
				width={0}
				height={0}
				sizes="(max-width: 1024px) 100vw, 30vw"
				className="hidden w-[30%] shrink-0 grow-0 basis-auto object-contain object-bottom-left xl:block"
			/>
			<div className="flex w-full shrink-0 grow-0 basis-auto flex-col justify-center px-8 py-12 lg:px-16 xl:w-[70%]">
				<div className="mb-8">
					<div className="text-6xl font-black text-white xl:text-8xl 2xl:text-9xl">
						Hello, I'm
						<h1 className="ml-8 lg:ml-12">Lukas Wiklund</h1>
					</div>
				</div>
				<p className="text-2xl leading-relaxed text-white lg:text-3xl">
					Software Engineer turned startup founder.
					<br />
					Originally from Gothenburg, now based in Linköping, and spending winters in Spain.
				</p>
			</div>
		</div>
	</section>
)

const Button: FC<{ label: string; href: string }> = ({ label, href }) => (
	<a
		className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 font-opensans text-sm text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{label}
	</a>
)

export default HeroSection
