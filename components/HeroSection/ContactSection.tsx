import { NextPage } from "next"
import styled from "styled-components"


const skills = [
	{
		name: "lukas-wiklund",
		logo: "linkedin.svg",
		link: "https://www.linkedin.com/in/lukas-wiklund/",
	},
	{
		name: "Hadermite",
		logo: "github.svg",
		link: "mailto:lukas@wiklund.se",
	},
	{
		name: "lukas@wiklund.se",
		logo: "mail.svg",
		link: "mailto:lukas@wiklund.se",
	},
]

const ContactSection: NextPage = () =>
	<Container>
		<Title>Get in touch</Title>
		<Skills>
			{skills.map(({ name, logo, link }, index) =>
				<Skill key={index}>
					<SkillLink href={link}>
						<SkillImage alt={`${name} logo`} src={`/logos/${logo}`} />
						<SkillName>{name}</SkillName>
					</SkillLink>
				</Skill>
			)}
		</Skills>
	</Container>

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
	margin: 0 30px;
`

const SkillLink = styled.a`
	color: #212121;
	display: flex;
	align-items: center;
	text-decoration: none;
`

const SkillImage = styled.img`
	height: 40px;
	margin-right: 15px;
`

const SkillName = styled.p`
	font-size: 20px;
`

export default ContactSection
