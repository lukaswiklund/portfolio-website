import Document, { DocumentContext, Html, Main, NextScript } from "next/document"
import Head from "next/head"
import React from "react"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
	static async getInitialProps(context: DocumentContext) {
		const styleSheet = new ServerStyleSheet()
		const page = context.renderPage(App => props => styleSheet.collectStyles(<App {...props} />))
		return { ...page, styleTags: styleSheet.getStyleElement() }
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
