import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

// useLayoutEffect avoids a brief flash of the old scroll position
export default function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useLayoutEffect(() => {
        if (hash) return // let the browser handle in-page anchors
        window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    }, [pathname])

    // If you want smooth anchor jumps:
    useEffect(() => {
        if (!hash) return
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }, [hash])

    return null
}

