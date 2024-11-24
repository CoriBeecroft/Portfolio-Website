import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Icon from "./components/Icon"
import projectContent from "./projectContent"

import "./ProjectPage.scss"
import "./Common.scss"

function getQueryParam(paramName) {
    const urlParams = new URLSearchParams(window.location.search)
    const paramObject = {}

    for (const [key, value] of urlParams) {
        paramObject[key] = value
    }

    return paramObject[paramName] ?? ""
}

// template for project
/* {
    id: "",
    title: "",
    live-url: ""
    preview: <a target="_blank" href="">
        <img { ...{
            className: "img-responsive",
            title: "",
            alt: "",
            src: ""
        }} />
    </a>,
    description: "",
    objectives: [],
    todo: [],
    usageInstructions: []
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    technologies: "",
    gitHub: ""
} */

export const ProjectPage = () => {
    const [project, setProject] = useState(null)

    useEffect(() => {
        setProject(projectContent[getQueryParam("project")])
    }, [])

    return (
        <>
            <Header />
            {project && (
                <main>
                    <h1>{project.title}</h1>
                    <img className="main-image" src={project.bigImage} />

                    <div className="button-container">
                        <button className="primary">View Live</button>
                        <button className="secondary">View On GitHub</button>
                    </div>
                    <div className="technologies">
                        {project.technologies.map(t => (
                            <Icon key={t} type={t} />
                        ))}
                    </div>
                    <div className="details">
                        <div className="description">
                            <h2>Description</h2>
                            <div className="content">{project.description}</div>
                        </div>
                        <div className="objectives">
                            <h2>Objectives</h2>
                            <div className="content">
                                <ul>
                                    {project.objectives.map(o => (
                                        <li>{o}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {project.todo && (
                            <div className="to-do">
                                <h2>To Do</h2>
                                <div className="content">
                                    <ul>
                                        {project.todo.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        <div className="challenges-and-lessons">
                            <h2>Challenges and Lessons</h2>
                            <div className="content">
                                Lorem ipsum odor amet, consectetuer adipiscing
                                elit. Dictumst et porta posuere varius mus eget
                                consequat bibendum nascetur. Eget suspendisse
                                senectus diam scelerisque aenean in nostra
                                ultricies mattis. Augue magnis suspendisse
                                sociosqu nisi donec. Magna fermentum hac
                                phasellus praesent sagittis turpis orci
                                bibendum. Efficitur enim varius sem ad senectus
                                placerat senectus elit nam.
                            </div>
                        </div>
                    </div>
                </main>
            )}
            <Footer />
        </>
    )
}
