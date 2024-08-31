import React from "react"
import { Icon } from "./PortfolioPage"

import "./Project.scss"
import { PortfolioPage } from "./PortfolioPage"

export function Project({
    title,
    tagline,
    writtenWith,
    gitHub,
    preview,
    description,
    myContribution,
    usageInstructions,
    inspiration,
    whatWasChallenging,
    todo,
    areasForImprovement,
}) {
    return (
        <div className="project">
            <TitleContent {...{ title, tagline, writtenWith, gitHub }} />
            <div className="project-content">
                <div className="preview">{preview}</div>
                <section>
                    <h3>Description</h3>
                    <div>{description}</div>
                </section>
                {myContribution && (
                    <section>
                        <h3>My Contribution</h3>
                        <div>{myContribution}</div>
                    </section>
                )}
                {usageInstructions && (
                    <section>
                        <h3>Instructions for Use</h3>
                        <ul>
                            {usageInstructions.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {inspiration && (
                    <section>
                        <h3>Inspiration </h3>
                        <p>{inspiration}</p>
                    </section>
                )}
                {whatWasChallenging && (
                    <section>
                        <h3>What Was Challenging</h3>
                        <p>{whatWasChallenging}</p>
                    </section>
                )}
                {todo && (
                    <section>
                        <h3>To Do </h3>
                        <ul>
                            {todo.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
                {areasForImprovement && (
                    <section>
                        <h3>Areas For Improvement</h3>
                        <ul>
                            {areasForImprovement.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </div>
            <div className="footer">
                {writtenWith.map(ww => (
                    <div key={ww} className="technology">
                        {ww}
                    </div>
                ))}
                <a
                    href={gitHub}
                    target="_blank"
                    style={{
                        display: "flex",
                        width: 30,
                        margin: "0px 16px",
                    }}
                >
                    <Icon type={"git-hub"} />
                </a>
            </div>
        </div>
    )
}

function TitleContent({ title, tagline, writtenWith, gitHub }) {
    return (
        <div className="title-content">
            <h2>
                {title}
                {tagline && <div className="tagline">{tagline}</div>}
            </h2>
        </div>
    )
}
