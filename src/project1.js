import React from "react"
import { createRoot } from "react-dom/client"
import { ProjectPage } from "./ProjectPage"

const container = document.getElementById("site-container")
const root = createRoot(container)
root.render(<ProjectPage />)
