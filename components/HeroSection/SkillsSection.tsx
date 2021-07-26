import { NextPage } from "next"
import styled from "styled-components"


const skills = [
	{
		name: "React",
		logo: "react.svg",
	},
]

const SellingPointsSection: NextPage = () =>
	<Container>
		<Title>What I'm using</Title>
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
`

const Skill = styled.li`

`

export default SellingPointsSection
