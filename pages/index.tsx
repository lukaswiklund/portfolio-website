import { NextPage } from "next"
import Head from "next/head"

import HeroSection from "components/HeroSection/HeroSection"
import SellingPointsSection from "components/HeroSection/SellingPointsSection"


const HomePage: NextPage = () =>
	<>
		<Head>
			<title>Lukas Wiklund</title>
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900" />
		</Head>

		<HeroSection />
		<SellingPointsSection />
	</>

export default HomePage
