import { NextPage } from "next"
import styled from "@emotion/styled"

const skills = [
	{
		name: "React",
		logo: "react.svg",
	},
	{
		name: "NodeJS",
		logo: "nodejs.svg",
	},
	{
		name: "TypeScript",
		logo: "typescript.svg",
	},
	{
		name: "SQL",
		logo: "sql.svg",
	},
]

const SellingPointsSection: NextPage = () => (
	<Container>
		<Title>What I'm using</Title>
		<Skills>
			{skills.map(({ name, logo }, index) => (
				<Skill key={index}>
					<SkillImage alt={`${name} logo`} src={`/logos/${logo}`} />
					<SkillName>{name}</SkillName>
				</Skill>
			))}
		</Skills>
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

const Skills = styled.ul`
	list-style: none;
	display: flex;
`

const Skill = styled.li`
	display: flex;
	align-items: center;
	margin: 0 30px;
`

const SkillImage = styled.img`
	height: 40px;
	margin-right: 15px;
`

const SkillName = styled.p`
	font-size: 20px;
`

export default SellingPointsSection
