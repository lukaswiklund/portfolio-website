import styled from "styled-components"

import ExperienceList, { Experience } from "./ExperienceList"


const experiences: Experience[] = [
	{
		title: "Inet",
		description: "Development of the web-shop (both front-end and back-end) with its associated systems and services, as well as internal applications.",
		startDate: new Date("2019-01-07"),
	},
]

const Section = styled.section`
	background-color: #222222;
	padding: 56px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Title = styled.h2`
	color: white;
	font-size: 56px;
	text-align: center;
	margin-bottom: 16px;
`

const ExperienceSection = () =>
	<Section>
		<Title>Work Experience</Title>
		<ExperienceList experiences={experiences} />
	</Section>

export default ExperienceSection
