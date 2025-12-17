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
			<body>{children}</body>
		</html>
	)
}
