import React, { useState } from "react"
import Header from "./components/Header"
import HeaderGraphic from "./components/HeaderGraphic"
import Icon from "./components/Icon"
import Footer from "./components/Footer"
import projects from "./projectContent"

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
                {Object.values(projects)
                    .filter(project => {
                        return (
                            selectedFilter == "All" ||
                            project.tags.includes(selectedFilter.toLowerCase())
                        )
                    })
                    .map(project => (
                        <ProjectNotecard key={project.id} {...project} />
                    ))}
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
                                "filter" +
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

const ProjectNotecard = ({ title, description, technologies, image, id }) => {
    // id: "",
    // title: "",
    // tagline: <a href="" target="_blank">
    //     (See Project)
    // </a>,
    // preview: <a target="_blank" href="">
    //     <img { ...{
    //         className: "img-responsive",
    //         title: "",
    //         alt: "",
    //         src: ""
    //     }} />
    // </a>,
    // description: "",
    // inspiration: ``,
    // usageInstructions: []
    // myContribution: <></>,
    // whatWasChallenging: ``,
    // areasForImprovement: [],
    // todo: [],
    // writtenWith: "",
    // gitHub: ""

    return (
        <div className="project-notecard">
            <h2>{title}</h2>
            <div className="main-content">
                <img src={image} />
                <div className="summary-and-technologies">
                    <div className="technologies">
                        {technologies.map(technology => (
                            <Icon key={technology} type={technology} />
                        ))}
                    </div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="bottom-buttons">
                <a className="button primary">
                    View Live <Icon type="play" />
                </a>
                <a className="secondary" href={`/project1.html?project=${id}`}>
                    More Info
                </a>
            </div>
        </div>
    )
}

export default HomePage
