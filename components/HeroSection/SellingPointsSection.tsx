import { NextPage } from "next"
import styled from "styled-components"


const workItems = [
	{ name: "Cosuno", logo: "cosuno.svg", description: "Developing a web app to digitize the construction industry." },
	{ name: "Forento", logo: "forento.svg", description: "Developing a web platform to let users create their very own online course platform." },
	{ name: "Inet", logo: "inet.svg", description: "Developing a web shop for Sweden's most loved computer store brand." },
]

const SellingPointsSection: NextPage = () =>
	<Container>
		<WorkItems>
			{workItems.map(({ name, logo, description }, index) =>
				<WorkItem key={index}>
					<WorkItemImage style={{backgroundImage: `url("/logos/${logo}")`}} />
					<WorkItemTitle>{name}</WorkItemTitle>
					<WorkItemDescription>{description}</WorkItemDescription>
				</WorkItem>
			)}
		</WorkItems>
	</Container>

const Container = styled.section`
	padding: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
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
	color: #8B8B8B;
`

export default SellingPointsSection
