import React, { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Icon from "./components/Icon"
import projectContent from "./projectContent"

import "./ProjectPage.scss"
import "./Common.scss"

export default function ProjectPage() {
    const { id } = useParams()
    const project = useMemo(() => projectContent[id], [id])

    return (
        <>
            <Header />
            {!project ? (
                <main>
                    <h1>Project not found</h1>
                    <p>
                        The project “{id}” doesn’t exist.{" "}
                        <Link to="/">Go back home</Link>
                    </p>
                </main>
            ) : (
                <main>
                    <h1>{project.title}</h1>
                    <img
                        className="main-image"
                        src={project.bigImage}
                        alt={project.title}
                    />
                    <div className="button-container">
                        {project.liveUrl && (
                            <a
                                className="primary"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Live
                            </a>
                        )}
                        {project.gitHub && (
                            <a
                                className="secondary"
                                href={project.gitHub}
                                target="_blank"
                                rel="noreferrer"
                            >
                                View on GitHub
                            </a>
                        )}
                    </div>
                    <div className="technologies">
                        {project.technologies?.map(t => (
                            <Icon key={t} type={t} />
                        ))}
                    </div>
                    <div className="details">
                        <div className="description">
                            <h2>Description</h2>
                            <div className="content">{project.description}</div>
                        </div>
                        {project.objectives?.length > 0 && (
                            <div className="objectives">
                                <h2>Objectives</h2>
                                <div className="content">
                                    <ul>
                                        {project.objectives.map((o, i) => (
                                            <li key={i}>{o}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                        {project.todo?.length > 0 && (
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
