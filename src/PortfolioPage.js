import React, { useState, useEffect, useRef } from "react";
import { Project } from "./Project"
import { projects } from "./projectContent"
import { Tile } from "./Tile"

import "./PortfolioPage.scss";

export const PortfolioPage = () => {
    const contentsRefs = useRef({})
    const getContentsRefs = () => contentsRefs.current;

    return <div>
        {[
            { content: <Header /> },
            { content: <Contents getContentsRefs={ getContentsRefs } /> },
            { content: <Intro />, id: "intro" },
            { content: <ProfessionalWorkAtNtk />, id: "ntk" },
            ...projects.map(project => ({
                content: <Project { ...project } />,
                id: project.id
            })),
            { content: <Footer /> }
        ].map(({ content, id }, i) => <Tile { ...{
            key: i,
            id,
            index: i,
            ...(id ? { ref: node => {
                if(node) { contentsRefs.current[id] = node }
                else { delete contentsRefs.current[id]; }
            }} : {}),
        }}>
            { content }
        </Tile>) }
        <GoToTop />
    </div>
}

const Header = () => <header>
    <img { ...{
        className: "img-responsive",
        src: "images/KeyName.png",
        title: "Cori Beecroft",
        alt: `Picture of keys from a Mac keyboard spelling out "Cori Beecroft" 
            with some letters replaced by numbers.`
    }} />
</header>

function Intro() {
    return <div>
        <h2>Introduction</h2>
        <p>
            I'm a software engineer with ~5 years of professional experience doing
            full stack development. I have a BA in math (minor in computer science)
            from the University of Colorado Boulder. This website is a place for me
            to share some information on professional and personal projects I've 
            worked on.
        </p>
        <p>Currently available for hire and particularly interested in front end roles.</p>
	   <ContactInfo />
    </div>
}

function ContactInfo() {
    return <span>
        <a href="mailto:coribeecroft@gmail.com">E-mail</a>
        { " | " }
        <a href="https://github.com/coribeecroft" target="_blank">GitHub</a>
        { " | " }
        <a href="https://www.linkedin.com/in/cori-beecroft-9546446b/" target="_blank">LinkedIn</a>
    </span>
}

function GoToTop() {
    const [ visible, setVisible ] = useState(window.scrollY !== 0);
    const chevronUp = "\u2303"

    useEffect(() => {
        const updateVisibility = () => {
            if(window.scrollY !== 0 && !visible) {
                setVisible(true)
            } else if(window.scrollY === 0 && visible) {
                setVisible(false);
            }
        }
        document.addEventListener("scroll", updateVisibility)

        return () => document.removeEventListener(
            "scroll",
            updateVisibility
        )
    }, [ visible ])

    const scrollToTop = () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

    return <div className="go-to-top" onClick={ scrollToTop } style={{ opacity: visible ? 1 : 0 }}>
        <div>{ chevronUp }</div>
    </div>
}

function scrollToItem(id, getContentsRefs) {
    getContentsRefs()[id].scrollIntoView({ behavior: "smooth" })
}

function Contents(props) {
    return <div className="contents">
        <h2>Contents</h2>
        <section>
            {[
                { id: "intro", title: "Introduction" },
                { id: "ntk", title: "Professional Work at NetToolKit" },
                ...projects.map(({ id, title }) => ({ id, title }))
            ].map(({ id, title })=> <a { ...{
                key: id,
                onClick: () => scrollToItem(id, props.getContentsRefs)
            }}>{ title }</a>) }
        </section>
    </div>
}

const ProfessionalWorkAtNtk = () => {
    return <div>
        <h2>Professional Work at NetToolKit</h2>
        <section>
            <h3>Description</h3>
            <p>
                <a href="https://nettoolkit.com">NetToolKit</a> is a small company that offers
                internet services for software developers. I spent ~4.5 years working there as
                a full stack developer. During that time I had the opportunity to work on a lot
                of projects and wear various hats.
            </p>
        </section>
        <section>
            <h3>Projects</h3>
            <ul>
                <li><a href="https://en.wikipedia.org/wiki/Tiled_web_map">Map Tile</a> Server:
                    Set up a system for generating, updating and serving raster and vector map
                    tiles based on OpenStreetMap data. Significantly improved performance for 
                    raster tile requests.
                    <div className="languages-technologies">
                        Java, Bash, PostgreSQL, Docker, various open source tools
                    </div>
                </li>
                <li>MapWrapper:
                    A map library that provides a unified interface for interacting with Google
                    Maps, Bing Maps, Mapbox GL JS and OpenLayers.
                    <div className="languages-technologies">
                        JavaScript, Google Maps, Bing Maps, Mapbox GL JS and OpenLayers
                    </div>
                </li>
                <li>
                    Documentation Pages: Designed layout/styling for public documentation pages
                    for API endpoints and JavaScript libraries. Designed and implemented React
                    components that made it possible to generate documentation pages by passing
                    in a JSON object to a top level component.
                </li>
                <li>
                    Developed or contributed to many other projects including:
                    <ul>
                        <li>
                            Prototype for a somewhat unique software monitoring tool
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
                            <div className="languages-technologies">JavaScript, React</div>
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
        <div style={{
            textAlign: "center",
            fontSize: "1.2em",
            fontWeight: 500, 
        }}>More information on projects coming soon!</div>
    </div>
}

const Footer = () => (<footer>
    <ContactInfo />
    <p>© 2023 Cori Beecroft</p>
</footer>)
