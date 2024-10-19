import React from "react"
import Icon from "./Icon"

const Footer = () => (
    <footer>
        <div className="content">
            <ContactInfo />
            <div>© 2024 Cori Beecroft</div>
        </div>
    </footer>
)

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

export default Footer
