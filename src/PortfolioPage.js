import React from "react"
import hnMintImage from "./images/hn-mint.png"
import Header from "./components/Header"
import HeaderGraphic from "./components/HeaderGraphic"
import Icon from "./components/Icon"
import Footer from "./components/Footer"

import "./PortfolioPage.scss"

export const PortfolioPage = () => {
    return (
        <>
            <Header />
            <HeaderGraphic />
            <main>
                <Filters />
                <ProjectNotecard />
                <ProjectNotecard />
                <ProjectNotecard />
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

const ProjectNotecard = () => {
    return (
        <div className="project-notecard">
            <h2>Hacker News Mint</h2>
            <div className="main-content">
                <img src={hnMintImage} />
                <div className="summary-and-technologies">
                    <div className="technologies">
                        <Icon type="react" />
                        <Icon type="javascript" />
                        <Icon type="css" />
                    </div>
                    <div>
                        The first of three Hacker News front-ends I made. I
                        wrote this initially in 2017 as a way to learn React and
                        try to make a more professional UI. I enjoyed using it
                        to read Hacker News so I've made a few improvements
                        recently.
                    </div>
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
