import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Lukas Wiklund",
	description: "Hi, I'm Lukas Wiklund. A Software Engineer based in Gothenburg, Sweden.",
	openGraph: {
		images: [{ url: "/lukas.png", width: 1536, height: 2048 }],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
