import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Lukas Wiklund",
	description: "Hi, I'm Lukas Wiklund. A Software Engineer based in Gothenburg, Sweden.",
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
