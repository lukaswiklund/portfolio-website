import type { FC } from "react"

const ContactSection: FC = () => (
	<footer className="mt-20">
		<h2 className="text-2xl font-bold">Get in touch</h2>
		<p className="mt-6">Email is the best way to reach me:</p>
		<p className="mt-1 text-2xl font-bold md:text-3xl">
			<a href="mailto:hej@lukaswiklund.se">hej@lukaswiklund.se</a>
		</p>
		<p className="mt-6 text-muted">
			I'm also on <a href="https://www.linkedin.com/in/lukas-wiklund/">LinkedIn</a>,{" "}
			<a href="https://github.com/lukaswiklund/">GitHub</a> and{" "}
			<a href="https://www.facebook.com/LukasEGWiklund/">Facebook</a>.
		</p>
		<p className="mt-20 text-sm text-muted">© {new Date().getFullYear()} Lukas Wiklund</p>
	</footer>
)

export default ContactSection
