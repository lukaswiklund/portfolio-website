import styled from "styled-components"


export interface Experience {
	title: string
	description: string
	startDate: Date
	endDate?: Date
}

const List = styled.ul`
	list-style: none;
`

const Experience = styled.section`
	width: 400px;
	color: black;
	background-color: white;
	padding: 12px 16px;
	border-radius: 8px;

	&:not(:last-child) {
		margin-bottom: 16px;
	}
`

const Title = styled.h3`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 4px;
`

const Description = styled.p`
	margin-bottom: 4px;
`

const Timeline = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: bold;
`

const ExperienceList = ({ experiences }: { experiences: Experience[] }) =>
	<List>
		{experiences.map((experience, index) =>
			<Experience key={index}>
				<Title>{experience.title}</Title>
				<Description>{experience.description}</Description>
				<Timeline>
					<time dateTime={experience.startDate.toISOString()}>
						{experience.startDate.getFullYear()}-{(`0${experience.startDate.getMonth() + 1}`).padEnd(2)}
					</time>

					{experience.endDate !== undefined
						? <time dateTime={experience.endDate.toISOString()}>
							{experience.endDate.getFullYear()}-{(`0${experience.endDate.getMonth() + 1}`).padEnd(2)}
						</time>
						: "Present"
					}
				</Timeline>
			</Experience>
		)}
	</List>

export default ExperienceList
