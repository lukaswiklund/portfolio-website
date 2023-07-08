import styled from "@emotion/styled"
import Image from "next/image"

import nodejsLogo from "./logos/nodejs.svg"
import reactLogo from "./logos/react.svg"
import sqlLogo from "./logos/sql.svg"
import typescriptLogo from "./logos/typescript.svg"

const skills = [
	{ name: "React", logo: reactLogo },
	{ name: "NodeJS", logo: nodejsLogo },
	{ name: "TypeScript", logo: typescriptLogo },
	{ name: "SQL", logo: sqlLogo },
]

const SellingPointsSection: React.FC = () => (
	<Container>
		<Title>What I'm using</Title>
		<Skills>
			{skills.map(({ name, logo }, index) => (
				<Skill key={index}>
					<SkillImage alt={`${name} logo`} src={logo} height={40} />
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

const SkillImage = styled(Image)`
	margin-right: 15px;
`

const SkillName = styled.p`
	font-size: 20px;
`

export default SellingPointsSection
