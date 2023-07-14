import React from "react";
import { Project } from "./Project"
import { projects } from "./projectContent"
import { Tile } from "./Tile"

import "./PortfolioPage.scss";

export const PortfolioPage = () => {
    return <div>
        {[
            <Header />,
            <Intro />,
            <UpdatesComingSoon />,
            ...projects.map(project => <Project { ...project } />),
            <Footer />
        ].map((section, i) => <Tile key={ i } index={ i }>
            { section }
        </Tile>) }
    </div>
}

const Header = () => <header>
    <img { ...{
        className: "img-responsive",
        src: "images/KeyName.png",
        title: "Cori Beecroft",
        alt: "Picture of keys from a Mac keyboard spelling out Cori Beecroft."
    }} />
</header>

function Intro() {
    return <div id="intro">
        <h2>Introduction:</h2>
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
