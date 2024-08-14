import { css, Global } from "@emotion/react"
import { Analytics } from "@vercel/analytics/react"
import { AppProps } from "next/app"

const globalStyles = (
	<Global
		styles={css`
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				font-family: "Overpass", sans-serif;
			}
		`}
	/>
)

const App = ({ Component, pageProps }: AppProps) => (
	<>
		{globalStyles}
		<Analytics />
		<Component {...pageProps} />
	</>
)

export default App
