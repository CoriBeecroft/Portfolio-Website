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
            { content: <UpdatesComingSoon />, id: "quick-update" },
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
            I'm a graduate from CU Boulder with a degree in math and a
            minor in computer science. This website is a place for me to
            share some of my programming projects.
        </p>
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
                { id: "quick-update", title: "Quick Update" },
                ...projects.map(({ id, title }) => ({ id, title }))
            ].map(({ id, title })=> <a { ...{
                key: id,
                onClick: () => scrollToItem(id, props.getContentsRefs)
            }}>{ title }</a>) }
        </section>
    </div>
}

const UpdatesComingSoon = () => {
    return <div>
        <h2>Quick Update</h2>
        <section>
            It has been a while since I've had a chance to update this site. 
            I'm hoping to make some updates soon. Until then, here is a little
            bit about what I've been up to recently.
        </section>
        <section>
            <h3>Full Stack Development at NetToolKit</h3>
            <ul>
                <li>Developed an experimental CAPTCHA service (full stack)</li>
                <li>
                    Made a JavaScript map library that abstracts over Google Maps, Bing Maps and OpenLayers (front end)
                </li>
                <li>
                    Developed or contributed to lots of smaller projects including:
                    <ul>
                        <li>A tool for comparing geocoding providers (front end)</li>
                        <li>Prototype for a somewhat unique software monitoring tool (full stack)</li>
                        <li>Various internal libraries (mostly front end)</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h3>Code Tutor</h3>
            <p>
                Did front end work for a "code tutor" Electron app that I was 
                working on with <a href="http://symbolflux.com">my brother</a>.
            </p>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                <a target="_blank" href="images/code-tutor-wireframe.jpg">
                    <img { ...{
                        className: "code-tutor img-responsive",
                        title: "Code Tutor Wireframe",
                        alt: "Photo of hand drawn Code Tutor wireframe",
                        src: "images/code-tutor-wireframe.jpg",
                    }} />
                </a>
                <div style={{ margin: "auto 10px" }}>&rarr;</div>
                <a target="_blank" href="images/code-tutor.png">
                    <img { ...{
                        className: "code-tutor img-responsive",
                        title: "Code Tutor",
                        alt: "Screenshot of Code Tutor project",
                        src: "images/code-tutor.png",
                    }} />
                </a>
            </div>
        </section>
    </div>
}

const Footer = () => (<footer>
    <ContactInfo />
    <p>© 2023 Cori Beecroft</p>
</footer>)
