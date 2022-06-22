import { NextPage } from "next"
import styled from "styled-components"

const workItems = [
	{
		name: "Forento",
		logo: "forento.svg",
		link: "https://www.forento.io/",
		description:
			"SaaS platform that lets users create their very own custom branded online course & digital content monetization platform.",
	},
	{
		name: "Cosuno",
		logo: "cosuno.svg",
		link: "https://www.cosuno.de/",
		description:
			"SaaS platform to manage the entire planning cycle and benefit from a one-size-fits-all solution for all planning needs for the construction industry.",
	},
	{
		name: "Inet",
		logo: "inet.svg",
		link: "https://www.inet.se/",
		description: "Web shop and retail system for Sweden's most loved computer store brand.",
	},
]

const ExperienceSection: NextPage = () => (
	<Container>
		<Title>What I've done</Title>
		<WorkItems>
			{workItems.map(({ name, logo, link, description }, index) => (
				<WorkItem key={index}>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<WorkItemImage style={{ backgroundImage: `url("/logos/${logo}")` }} />
					</a>
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

const WorkItems = styled.ol`
	list-style: none;
	display: flex;
`

const WorkItem = styled.li`
	width: 300px;
	margin: 0 30px;
`

const WorkItemImage = styled.div`
	width: calc(100% - 40px);
	height: 70px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	margin: 0 20px 30px 20px;
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
