import React from "react"
import Header from "./components/Header"
import HeaderGraphic from "./components/HeaderGraphic"
import Icon from "./components/Icon"
import Footer from "./components/Footer"
import projects from "./projectContent"

import "./HomePage.scss"
import "./Common.scss"

const HomePage = () => {
    return (
        <>
            <Header />
            <HeaderGraphic />
            <main>
                <Filters />
                {projects.map(project => (
                    <ProjectNotecard key={project.id} {...project} />
                ))}
            </main>
            <Footer />
        </>
    )
}

const Filters = () => {
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
                        key={filter}
                        className={
                            "filter" + (filter === "All" ? " selected" : "")
                        }
                    >
                        {filter}
                    </div>
                )
            })}
        </div>
    )
}

const ProjectNotecard = ({
    title,
    description,
    writtenWith,
    image,
    tagline,
    preview,
}) => {
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
                        {writtenWith.map(technology => (
                            <Icon key={technology} type={technology} />
                        ))}
                    </div>
                    <div>{description}</div>
                </div>
            </div>
            <div className="bottom-buttons">
                <button className="primary">
                    <a>
                        View Live <Icon type="play" />
                    </a>
                </button>
                <button className="secondary">
                    <a>More Info</a>
                </button>
            </div>
        </div>
    )
}

export default HomePage
