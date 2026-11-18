"use client"

import { track } from "@vercel/analytics"
import { useEffect } from "react"

const maxLength = 255

const getLabel = (anchor: HTMLAnchorElement) =>
	anchor.dataset.track ??
	(anchor.textContent?.trim() || anchor.querySelector("img")?.alt || anchor.href)

// Reports every link click (including middle clicks that open a new tab) as a
// Vercel Web Analytics custom event. Only two properties are sent, since that's
// the most the Pro plan stores per event.
const LinkClickTracker = () => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (event.type === "auxclick" && event.button !== 1) return
			if (!(event.target instanceof Element)) return

			const anchor = event.target.closest("a[href]")
			if (!(anchor instanceof HTMLAnchorElement)) return

			track("Link Click", {
				link: getLabel(anchor).slice(0, maxLength),
				url: anchor.href.slice(0, maxLength),
			})
		}

		document.addEventListener("click", handleClick, { capture: true })
		document.addEventListener("auxclick", handleClick, { capture: true })
		return () => {
			document.removeEventListener("click", handleClick, { capture: true })
			document.removeEventListener("auxclick", handleClick, { capture: true })
		}
	}, [])

	return null
}

export default LinkClickTracker
