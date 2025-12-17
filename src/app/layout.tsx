import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Lukas Wiklund",
	description:
		"Hello, I'm Lukas Wiklund. Software Engineer turned startup founder. Originally from Gothenburg, now based in Linköping, and spending winters in Spain.",
	metadataBase: new URL("https://lukaswiklund.se"),
	openGraph: { images: [{ url: "/lukas.png", width: 1536, height: 2048 }] },
	alternates: { canonical: "/" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
				<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
			</head>
			<body>{children}</body>
		</html>
	)
}
