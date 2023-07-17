import React from "react";

import "./Project.scss";

export function Project(props) {
    return <div className="project">
        <h2>{ props.title }</h2>
        { props.tagline && <span className="tagline">{ props.tagline }</span> }
        <div className="project-content">
            <div className="preview">{ props.preview }</div>
            <section>
                <h3>Description:</h3>
                <p>{ props.description }</p>
            </section>
            { props.myContribution && <section>
                <h3>My Contribution:</h3>
                <div>{ props.myContribution }</div>
            </section>}
            { props.inspiration && <section>
                <h3>Inspiration: </h3>
                <p>{ props.inspiration }</p>
            </section> }
            { props.usageInstructions && <section>
                <h3>Instructions for Use: </h3>
                <ul>{ props.usageInstructions.map((item, i) => <li key={ i }>{ item }</li>) }</ul>
            </section> }
            { props.whatWasChallenging && <section>
                <h3>What Was Challenging: </h3>
                <p>{ props.whatWasChallenging }</p>
            </section>
            }
            { props.todo && <section>
                <h3>To Do: </h3>
                <ul>{ props.todo.map((item, i) => <li key={ i }>{ item }</li>) }</ul>
            </section> }
            { props.areasForImprovement && <section>
                <h3>Areas For Improvement: </h3>
                <ul>
                    { props.areasForImprovement.map((item, i) => <li key={ i }>{ item }</li>) }
                </ul>
            </section> }
            <section>
                <h3>Written With: </h3>
                <p>{ props.writtenWith }</p>
            </section>
            <section>
                <h3>GitHub: </h3>
                { props.gitHub.startsWith("http") ?
                    <a href={ props.gitHub} target="_blank">
                        { props.gitHub }
                    </a> :
                    props.gitHub
                }
            </section>
        </div>
    </div>
}
