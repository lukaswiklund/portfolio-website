import React from "react"
import { Head, Html, Main, NextScript } from "next/document"

const Document: React.FC = () => (
	<Html>
		<Head>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;900" />

			<script async src="https://www.googletagmanager.com/gtag/js?id=G-5TY0TVR0J8"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-5TY0TVR0J8');
					`,
				}}
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
)

export default Document
