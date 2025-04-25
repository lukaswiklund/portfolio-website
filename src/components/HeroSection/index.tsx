import Image from "next/image"
import { FC } from "react"

import Navigation from "./Navigation"
import picture from "./picture.png"

const HeroSection: FC = () => (
	<section className="relative bg-black">
		<Navigation />
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

export default HeroSection
