import React from "react"

import "./Header.scss"

const Header = () => {
    return (
        <header>
            <div className="link-container">
                <a>Cori Beecroft</a>
                <div className="secondary-links">
                    <a>about</a>
                    {/* <a>projects</a> */}
                    <a>contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header
