import { FC } from "react"

const Navigation: FC = () => (
	<div className="flex items-start justify-center py-11">
		<Button label="LinkedIn" href="https://www.linkedin.com/in/lukas-wiklund/" />
		<Button label="GitHub" href="https://github.com/Hadermite" />
		<Button label="Facebook" href="https://www.facebook.com/LukasEGWiklund/" />
	</div>
)

const Button: FC<{ label: string; href: string }> = ({ label, href }) => (
	<a
		className="p-6 font-opensans text-white duration-200 hover:text-hover"
		target="_blank"
		rel="noopener noreferrer"
		href={href}
	>
		{label}
	</a>
)

export default Navigation
