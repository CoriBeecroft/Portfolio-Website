import React, { useState } from "react"
import Header from "./components/Header"
import HeaderGraphic from "./components/HeaderGraphic"
import Footer from "./components/Footer"
import projects from "./projectContent"
import ProjectNotecard from "./ProjectNotecard"

import "./HomePage.scss"
import "./Common.scss"

const HomePage = () => {
    const [selectedFilter, setSelectedFilter] = useState("All")

    return (
        <>
            <Header />
            <HeaderGraphic />
            <main>
                <Filters {...{ selectedFilter, setSelectedFilter }} />
                <div className="projects">
                    {Object.values(projects)
                        .filter(project => {
                            return (
                                selectedFilter == "All" ||
                                project.tags.includes(
                                    selectedFilter.toLowerCase()
                                )
                            )
                        })
                        .map(project => (
                            <ProjectNotecard key={project.id} {...project} />
                        ))}
                </div>
            </main>
            <Footer />
        </>
    )
}

const Filters = ({ selectedFilter, setSelectedFilter }) => {
    return (
        <div className="filters">
            {[
                "All",
                "Professional",
                "Personal",
                "Front-end",
                "Back-end",
                "Full-stack",
            ].map(filter => {
                return (
                    <div
                        {...{
                            key: filter,
                            className:
                                "button filter" +
                                (filter === selectedFilter ? " selected" : ""),
                            onClick: () => setSelectedFilter(filter),
                        }}
                    >
                        {filter}
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage
