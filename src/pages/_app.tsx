import { Analytics } from "@vercel/analytics/react"
import { AppProps } from "next/app"

import "~/assets/styles.css"

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Analytics />
		<Component {...pageProps} />
	</>
)

export default App
