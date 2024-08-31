import React, { useState, useEffect, useRef } from "react"
import { Project } from "./Project"
import { projects } from "./projectContent"
import { Tile } from "./Tile"

import "./PortfolioPage.scss"

export const PortfolioPage = () => {
    const contentsRefs = useRef({})
    const getContentsRefs = () => contentsRefs.current

    return (
        <div>
            {[
                {
                    content: (
                        <>
                            <Header />
                            <Intro />
                        </>
                    ),
                },
                { content: <Contents getContentsRefs={getContentsRefs} /> },
                { content: <ProfessionalWorkAtNtk />, id: "ntk" },
                ...projects.map(project => ({
                    content: <Project {...project} />,
                    id: project.id,
                })),
                { content: <Footer /> },
            ].map(({ content, id }, i) => (
                <Tile
                    {...{
                        key: i,
                        id,
                        index: i,
                        ...(id
                            ? {
                                  ref: node => {
                                      if (node) {
                                          contentsRefs.current[id] = node
                                      } else {
                                          delete contentsRefs.current[id]
                                      }
                                  },
                              }
                            : {}),
                    }}
                >
                    {content}
                </Tile>
            ))}
            <GoToTop />
        </div>
    )
}

const Header = () => (
    <header>
        <img
            {...{
                className: "img-responsive",
                src: "images/KeyName.png",
                title: "Cori Beecroft",
                alt: `Picture of keys from a Mac keyboard spelling out "Cori Beecroft"
            with some letters replaced by numbers.`,
            }}
        />
    </header>
)

function Intro() {
    return (
        <div id="intro">
            <p>
                I'm a software engineer with ~5 years of professional experience
                doing full stack development. I have a BA in math (minor in
                computer science) from the University of Colorado Boulder. This
                website is a place for me to share some information on
                professional and personal projects I've worked on.
            </p>
            <p>
                Currently available for hire and particularly interested in
                front end roles.
            </p>
            <ContactInfo />
        </div>
    )
}

function ContactInfo() {
    return (
        <span className="contact-info">
            <a href="mailto:coribeecroft@gmail.com">
                <Icon type="envelope" />
            </a>
            <a href="https://github.com/coribeecroft" target="_blank">
                <Icon type="git-hub" />
            </a>
            <a
                href="https://www.linkedin.com/in/cori-beecroft-9546446b/"
                target="_blank"
            >
                <Icon type="linked-in" />
            </a>
        </span>
    )
}

export function Icon({ type }) {
    if (type === "envelope") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
            </svg>
        )
    } else if (type === "git-hub") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                {/*Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
        )
    } else if (type === "linked-in") {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
        )
    } else if (type === "chevron-up") {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ fill: "#d9d9d9", width: 30 }}
            >
                {/* Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
            </svg>
        )
    }
}

function GoToTop() {
    const [visible, setVisible] = useState(window.scrollY !== 0)

    useEffect(() => {
        const updateVisibility = () => {
            if (window.scrollY !== 0 && !visible) {
                setVisible(true)
            } else if (window.scrollY === 0 && visible) {
                setVisible(false)
            }
        }
        document.addEventListener("scroll", updateVisibility)

        return () => document.removeEventListener("scroll", updateVisibility)
    }, [visible])

    const scrollToTop = () =>
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })

    return (
        <div
            className="go-to-top"
            onClick={scrollToTop}
            style={{ opacity: visible ? 1 : 0 }}
        >
            <Icon type="chevron-up" />
        </div>
    )
}

function scrollToItem(id, getContentsRefs) {
    getContentsRefs()[id].scrollIntoView({ behavior: "smooth" })
}

function Contents(props) {
    return (
        <div className="contents">
            <h2>Contents</h2>
            <section>
                {[
                    { id: "ntk", title: "Professional Work at NetToolKit" },
                    ...projects.map(({ id, title }) => ({ id, title })),
                ].map(({ id, title }) => (
                    <a
                        {...{
                            key: id,
                            onClick: () =>
                                scrollToItem(id, props.getContentsRefs),
                        }}
                    >
                        {title}
                    </a>
                ))}
            </section>
        </div>
    )
}

const ProfessionalWorkAtNtk = () => {
    return (
        <div>
            <h2>Professional Work at NetToolKit</h2>
            <section>
                <h3>Description</h3>
                <p>
                    <a href="https://nettoolkit.com">NetToolKit</a> is a small
                    company that offers internet services for software
                    developers. I spent ~4.5 years working there as a full stack
                    developer. During that time I had the opportunity to work on
                    a lot of projects and wear various hats.
                </p>
            </section>
            <section>
                <h3>Projects</h3>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Tiled_web_map">
                            Map Tile
                        </a>{" "}
                        Server: Set up a system for generating, updating and
                        serving raster and vector map tiles based on
                        OpenStreetMap data. Significantly improved performance
                        for raster tile requests.
                        <div className="languages-technologies">
                            Java, Bash, PostgreSQL, Docker, various open source
                            tools
                        </div>
                    </li>
                    <li>
                        MapWrapper: A map library that provides a unified
                        interface for interacting with Google Maps, Bing Maps,
                        Mapbox GL JS and OpenLayers.
                        <div className="languages-technologies">
                            JavaScript, Google Maps, Bing Maps, Mapbox GL JS and
                            OpenLayers
                        </div>
                    </li>
                    <li>
                        Documentation Pages: Designed layout/styling for public
                        documentation pages for API endpoints and JavaScript
                        libraries. Designed and implemented React components
                        that made it possible to generate documentation pages by
                        passing in a JSON object to a top level component.
                    </li>
                    <li>
                        Developed or contributed to many other projects
                        including:
                        <ul>
                            <li>
                                Prototype for a somewhat unique software
                                monitoring tool
                                <div className="languages-technologies">
                                    Java, JavaScript, PostgreSQL, React, Redux
                                </div>
                            </li>
                            <li>
                                An experimental CAPTCHA service
                                <div className="languages-technologies">
                                    Java, JavaScript, PostgreSQL, React
                                </div>
                            </li>
                            <li>
                                A tool for comparing geocoding providers
                                <div className="languages-technologies">
                                    JavaScript, React
                                </div>
                            </li>
                            <li>
                                Various internal libraries and tools
                                <div className="languages-technologies">
                                    Java, JavaScript, React
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>
            <div
                style={{
                    textAlign: "center",
                    fontSize: "1.2em",
                    fontWeight: 500,
                }}
            >
                More information on projects coming soon!
            </div>
        </div>
    )
}

const Footer = () => (
    <footer>
        <ContactInfo />
        <p>© 2024 Cori Beecroft</p>
    </footer>
)
