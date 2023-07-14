import React from "react";

// template for project
/* {
    id: "",
    title: "",
    tagline: <a href="" target="_blank">
        (See Project)
    </a>,
    preview: <a target="_blank" href="">
        <img { ...{
            className: "img-responsive",
            title: "",
            alt: "",
            src: ""
        }} />
    </a>,
    description: "",
    inspiration: ``,
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    todo: [],
    writtenWith: "",
    gitHub: ""
} */

export const projects = [{
    id: "HNFE",
    title: "Hacker News Front End",
    tagline: <a href="../HNFE/" target="_blank">
        (See Hacker News front-end)
    </a>,
    preview: <a target="_blank" href="images/hnfe.png">
        <img { ...{
            className: "img-responsive",
            title: "Hacker News Front End",
            alt: "Screenshot of Hacker News Front End project.",
            src: "images/hnfe.png"
        }} />
    </a>,
    description: <>
        { "A front-end for "}
        <a href="https://news.ycombinator.com/">Hacker News</a>
        { `. I wrote this initially as way to learn React but I like using 
            it to read Hacker News so I've been gradually improving it.` }
    </>,
    inspiration: ``,
    todo: [
        "Make a better mobile interface",
        "Make a user profile page",
        <>
            Improve performance for loading comments. (The Hacker News API makes this difficult.
            { " " }
            <a target="_blank" href="https://news.ycombinator.com/item?id=32541609">Discussion here.</a>)
        </>,
    ], 
    writtenWith: "JavaScript, React, CSS",
    gitHub: "https://github.com/coribeecroft/hacker-news-frontend"
}, {
    id: "fireflies",
    title: "Fireflies",
    tagline: <a href="../fireflies" target="_blank">(See Fireflies)</a>,
    preview: <a target="_blank" href="images/fireflies.png">
        <img { ...{
            className: "fireflies img-responsive",
            title: "Fireflies",
            alt: "Screenshot of Fireflies project",
            src: "images/fireflies.png",
        }} />
    </a>,
    description: "A graphical demo built on React. I made this for fun on a weekend.",
    inspiration: ``,
    usageInstructions: [
        "Click to add a new firefly",
        "Click and hold to grow a new firefly (doesn't work on touch screens atm)",
        "Click and hold for a while after the firefly stops growing for an Easter egg :) (doesn't work on touch screens atm)",
        "Optionally specify number of fireflies in the query string using \"numFireflies\"",
    ],
    // myContribution: <></>,
    // whatWasChallenging: ``,
    todo: [
        "Fix performance problems",
        "Fix issues with touch controls",
        "Fix issues with window resizing",
        "Make dragging add a trail of fireflies"
    ],
    writtenWith: "React, JavaScript",
    gitHub: "https://github.com/CoriBeecroft/fireflies"
}, {
    id: "forty96",
    title: "4096",
    tagline: <a href="../4096/index.html" target="_blank">
        (Play 4096)
    </a>,
    preview: <a target="_blank" href="images/4096.png">
        <img { ...{
            className: "img-responsive",
            title: "4096",
            alt: "Screenshot of 4096 project.",
            src: "images/4096.png",
        }} />
    </a>,
    description: <>
        { "A scripted version of the game " }
        <a href="https://gabrielecirulli.github.io/2048/" target="_blank">2048</a>
        { " where players have the option to specify an algorithm for automated gameplay." }
    </>,
    inspiration: `After playing 2048 for a while, I realized I was
        subconsciously developing a simple algorithm for playing
        the game. I was pretty sure I could come up with a good
        enough algorithm for gameplay that it could probably get
        far past the 2048 tile. This seemed like more fun to me
        than playing the game, so I made 4096.`,
    areasForImprovement: [
        "Touch controls",
        "Better GUI",
        `Make it so the game can be automatically run several
        times in a row and statistics about the runs will be
        shown (e.g. highest tile reached, how many moves it
        took, etc.)`,
    ],
    writtenWith: "JavaScript, JQuery, HTML, CSS",
    gitHub: "https://github.com/coribeecroft/4096"

}, {
    id: "nesting-docs",
    title: "Nesting Docs",
    tagline: <a href="http://coribeecroft.com/LODEssay" target="_blank">
        (See a nesting doc)
    </a>,
    description: `Nesting Docs is a tool for creating HTML documents that
        can be read at varying levels of detail. The idea here
        is that different readers of a particular piece of
        writing have different levels of knowledge and interest
        in the subject of the piece. This tool allows readers to
        choose how detailed the document is while they're
        reading it. This is a project was a collaboration with
        my brother.`,
    myContribution: <ul>
        <li>
            Refactored a messy, convoluted code-base into
            something simpler and easier to use, which reduced
            to total line-count by 40%
        </li>
        <li>Fixed a fundamental flaw in the software</li>
        <ul>
            <li>
                Re-wrote most of the parser in a way that
                (incidentally) significantly simplified the
                markup language
            </li>
            <li>
                Changed the structure of the document nodes in
                the DOM from flat to hierarchical
            </li>
        </ul>
    </ul>,
    writtenWith: "JavaScript, JQuery",
    gitHub: "This project is in a private repository"
}, {
    id: "lucidity",
    title: "Lucidity",
    tagline: <a href="http://symbolflux.com/projects/avd" target="_blank">
        (More information on Lucidity)
    </a>,
    description: <>
        { "This is one of my brother's projects that I helped with. " +
        "It is a data structure and algorithm visualization tool " +
        "that can be used for debugging or getting a better feel " +
        "for how complex algorithms work. A more detailed " +
        "description of this project can be found " }
        <a href="http://westoncb.com/projects/avd" target="_blank">here</a>
        { "." }
    </>,
    myContribution: <>
        <section>
            <h5>High-level visual algorithm annotations for hash maps and trees</h5>
            <p>
                This feature highlights important subsets of data
                at different stages of an algorithm's execution.
                For example, this could be used to show the current
                element in a data structure traversal algorithm or
                it could highlight the subset of elements being
                worked on in a divide and conquer algorithm.
            </p>
        </section>
        <section>
            <h5>Queue-based pop-up messaging system</h5>
            <p>
                A system for delivering messages to users. Messages
                pop up at the bottom of the screen and fade out
                after a few seconds. If new messages pop up before
                the old ones disappear, a vertical queue of messages
                is formed.
            </p>
        </section>
        <section>
            <h5>Idea for visually navigating large data structures</h5>
            <p>
                Came up with a binary-search-inspired idea for one
                of the early systems of visual navigation of data
                structures (specifically trying to solve the problem
                of navigating very large data structures).
            </p>
        </section>
    </>,
    writtenWith: "Java",
    gitHub: "This project is in a private repository"
}, {
    id: "doom-pet",
    title: "Doom Pet",
    preview: <iframe { ...{
        className: "embed-responsive-item",
        width: "500",
        height: "315",
        src: "https://www.youtube.com/embed/wcwLZ3V3lmE?autoplay=0",
        frameBorder: "0",
    }} allowFullScreen></iframe>,
    description: "A virtual pet game using graphics from iD Software's original Doom games.",
    whatWasChallenging: `This was a fairly large project with a lot of pieces so I
        got to solve a lot of interesting problems that varied from
       figuring out how to make projectile motion to creating
        systems for managing the states and behaviors of game
        entities (e.g. the pet, his food, etc).`,
    writtenWith: "Java, a simple game framework",
    gitHub: "This project is in a private repository"
}]