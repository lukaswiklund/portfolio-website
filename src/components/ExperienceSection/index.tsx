import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"

import cosunoLogo from "./logos/cosuno.svg"
import forentoLogo from "./logos/forento.svg"
import inetLogo from "./logos/inet.svg"

const workItems = [
	{
		name: "Forento",
		logo: forentoLogo,
		link: "https://forento.io",
		description:
			"SaaS platform that lets users create their very own custom branded online course & digital content monetization platform.",
	},
	{
		name: "Cosuno",
		logo: cosunoLogo,
		link: "https://www.cosuno.com",
		description:
			"SaaS platform to manage the entire planning cycle and benefit from a one-size-fits-all solution for all planning needs for the construction industry.",
	},
	{
		name: "Inet",
		logo: inetLogo,
		link: "https://www.inet.se/",
		description: "Web shop and retail system for Sweden's most loved computer store brand.",
	},
]

const ExperienceSection: React.FC = () => (
	<Container>
		<Title>What I've done</Title>
		<WorkItems>
			{workItems.map(({ name, logo, link, description }, index) => (
				<WorkItem key={index}>
					<WorkItemImageLink href={link} target="_blank" rel="noopener noreferrer">
						<Image
							alt={`${name}'s logo`}
							src={logo}
							width={240}
							height={70}
							style={{ objectFit: "contain" }}
						/>
					</WorkItemImageLink>
					<WorkItemTitle>{name}</WorkItemTitle>
					<WorkItemDescription>{description}</WorkItemDescription>
				</WorkItem>
			))}
		</WorkItems>
	</Container>
)

const Container = styled.section`
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Title = styled.h2`
	font-size: 40px;
	margin-bottom: 50px;
`

const WorkItems = styled.div`
	list-style: none;
	display: flex;
`

const WorkItem = styled.div`
	width: 300px;
	margin: 0 30px;
	display: flex;
	flex-direction: column;
`

const WorkItemImageLink = styled(Link)`
	margin-bottom: 20px;
	align-self: center;
`

const WorkItemTitle = styled.h3`
	color: #212121;
	margin-bottom: 5px;
`

const WorkItemDescription = styled.p`
	color: #8b8b8b;
	line-height: 1.4;
`

export default ExperienceSection
