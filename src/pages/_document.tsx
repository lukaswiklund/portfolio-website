import { Head, Html, Main, NextScript } from "next/document"
import React from "react"

const Document: React.FC = () => (
	<Html>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;900" />
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
)

export default Document
