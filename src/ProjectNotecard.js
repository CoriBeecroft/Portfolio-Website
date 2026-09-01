import React, { useState } from "react"
import Icon from "./components/Icon"
import { Link } from "react-router-dom"

import "./ProjectNotecard.scss"

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

                <Link className="button secondary" to={`/projects/${id}`}>
                    More Info
                </Link>
            </div>
        </div>
    )
}

export default ProjectNotecard
