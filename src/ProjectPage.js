import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Icon from "./components/Icon"
import hnMintImage from "./images/hn-mint-big.png"

import "./ProjectPage.scss"
import "./Common.scss"

export const ProjectPage = () => {
    return (
        <>
            <Header />
            <main>
                <h1>Hacker News Mint</h1>
                <img className="main-image" src={hnMintImage} />
                <div className="button-container">
                    <button className="primary">View Live</button>
                    <button className="secondary">View On GitHub</button>
                </div>
                <div className="technologies">
                    <Icon type="react" />
                    <Icon type="javascript" />
                    <Icon type="css" />
                </div>
                <div className="details">
                    <div className="objectives">
                        <h2>Objectives</h2>
                        <div className="content">
                            <ul>
                                <li>Learn React</li>
                                <li>
                                    Make a nice UI (one of the first times that
                                    was more of a focus than an afterthought in
                                    one of my projects... except maybe my first
                                    Portfolio Site)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="to-do">
                        <h2>To Do</h2>
                        <div className="content">
                            <ul>
                                <li>Make a better mobile interface</li>
                                <li>Make a user profile page</li>
                                <li>
                                    Improve performance for loading comments.
                                    (The Hacker News API makes this difficult.
                                    Discussion here.)
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="challenges-and-lessons">
                        <h2>Challenges and Lessons</h2>
                        <div className="content">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Dictumst et porta posuere varius mus eget consequat
                            bibendum nascetur. Eget suspendisse senectus diam
                            scelerisque aenean in nostra ultricies mattis. Augue
                            magnis suspendisse sociosqu nisi donec. Magna
                            fermentum hac phasellus praesent sagittis turpis
                            orci bibendum. Efficitur enim varius sem ad senectus
                            placerat senectus elit nam.
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
