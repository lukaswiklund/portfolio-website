import styled from "@emotion/styled"
import Image from "next/image"

import facebookLogo from "./logos/facebook.svg"
import githubLogo from "./logos/github.svg"
import linkedInLogo from "./logos/linkedin.svg"
import mailLogo from "./logos/mail.svg"

const skills = [
	{
		name: "Lukas Wiklund",
		logo: linkedInLogo,
		link: "https://www.linkedin.com/in/lukas-wiklund/",
	},
	{
		name: "Hadermite",
		logo: githubLogo,
		link: "https://github.com/Hadermite/",
	},
	{
		name: "Lukas Wiklund",
		logo: facebookLogo,
		link: "https://www.facebook.com/LukasEGWiklund/",
	},
	{
		name: "hej@lukaswiklund.se",
		logo: mailLogo,
		link: "mailto:hej@lukaswiklund.se",
	},
]

const ContactSection: React.FC = () => (
	<Container>
		<Title>Get in touch</Title>
		<Skills>
			{skills.map(({ name, logo, link }, index) => (
				<Skill key={index}>
					<SkillLink href={link} target="_blank" rel="noopener noreferrer">
						<SkillImage alt={`${name} logo`} src={logo} width={40} />
						<SkillName>{name}</SkillName>
					</SkillLink>
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
	margin: 0 30px;
`

const SkillLink = styled.a`
	color: #212121;
	display: flex;
	align-items: center;
	text-decoration: none;
`

const SkillImage = styled(Image)`
	margin-right: 15px;
`

const SkillName = styled.p`
	font-size: 20px;
`

export default ContactSection
