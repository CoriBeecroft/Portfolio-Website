import React from "react"
import { createRoot } from "react-dom/client"
import HomePage from "./HomePage"

const container = document.getElementById("site-container")
const root = createRoot(container)
root.render(<HomePage />)
