import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./HomePage"
import ProjectPage from "./ProjectPage"
import ScrollTop from "./ScrollTop"

export default function App() {
    return (
        <BrowserRouter>
            {/* <nav>
                <Link to="/">Home</Link> | <Link to="/project1">Project 1</Link>
            </nav> */}
            <ScrollTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                <Route path="*" element={<div>Not oddling</div>} />
            </Routes>
        </BrowserRouter>
    )
}
