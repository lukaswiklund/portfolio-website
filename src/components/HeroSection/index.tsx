import Image from "next/image"
import { FC } from "react"

import picture from "./picture.png"

const HeroSection: FC = () => (
	<section className="relative bg-black">
		<div className="flex items-start justify-center py-11">
			<Button label="LinkedIn" href="https://www.linkedin.com/in/lukas-wiklund/" />
			<Button label="GitHub" href="https://github.com/Hadermite" />
			<Button label="Facebook" href="https://www.facebook.com/LukasEGWiklund/" />
		</div>
		<div className="flex h-[70vh]">
			<Image
				alt="Picture of Lukas"
				src={picture}
				width={0}
				height={0}
				sizes="30vw"
				className="w-[30%] shrink-0 grow-0 basis-auto object-contain object-bottom-left"
			/>
			<div className="flex w-[70%] shrink-0 grow-0 basis-auto flex-col justify-center">
				<div className="flex flex-col justify-center">
					<div className="mb-8 text-9xl font-black text-white">
						Hi, I'm
						<h1 className="ml-12">Lukas Wiklund</h1>
					</div>
					<p className="text-3xl text-white">A Software Engineer based in Gothenburg, Sweden.</p>
				</div>
			</div>
		</div>
	</section>
)

const Button: FC<{ label: string; href: string }> = ({ label, href }) => (
	<a
		className="p-6 font-opensans text-white duration-200 hover:text-hover"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{label}
	</a>
)

export default HeroSection
