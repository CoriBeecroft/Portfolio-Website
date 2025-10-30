import React from "react"
import hnMintImage from "./images/hn-mint.png"
import hnMintBigImage from "./images/hn-mint-big.png"
import hnFishImage from "./images/hn-fish.png"
import hnFishBigImage from "./images/hn-fish-big.png"
import firefliesImage from "./images/fireflies.png"
import firefliesBigImage from "./images/fireflies-big.png"
import forty96Image from "./images/4096.png"
import forty96BigImage from "./images/4096-big.png"
import mapTilesImage from "./images/map-tiles.png"

// template for project
/* {
    id: "",
    title: "",
    live-url: ""
    image: mapTilesImage,
    bigImage: "",
    description: "",
    objectives: [],
    todo: [],
    usageInstructions: []
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    technologies: [],
    gitHub: "",
    tags: ["professional", "personal", "front-end", "back-end", "full-stack"]
} */

const hnFishContent = {
    id: "hn-fish",
    title: "Hacker News Fish",
    tagline: (
        <a href="../hn-fish/" target="_blank">
            (See Hacker News Fish)
        </a>
    ),
    preview: (
        <a target="_blank" href="images/hn-fish.png">
            <img
                {...{
                    className: "img-responsive",
                    title: "Hacker News Fish",
                    alt: "Screenshot of Hacker News Fish project.",
                    src: "images/hn-fish.png",
                }}
            />
        </a>
    ),
    image: hnFishImage,
    bigImage: hnFishBigImage,
    description: (
        <>
            {"A "}
            <a href="https://news.ycombinator.com/">Hacker News</a>
            {` front-end where the stories are displayed on fish!`}
        </>
    ),
    objectives: [],
    inspiration: `This was originally inspired by a comment my brother made about 
            wanting to see Hacker News headlines in something like a stock ticker. I 
            liked the idea but I wanted to make it into something more pleasant to 
            look at. Why fish? Honestly, I'm not quite sure, haha. I know I had the 
            water levels from Super Mario World in mind, even though I always hated 
            those levels. Maybe I just had a deep longing for bodies of water after 
            living in the Sonoran Desert for the last few years.`,
    usageInstructions: [
        "Click the headline on fish open the story in a new tab",
        "Click on the fish to open up the comments section",
        "Click and drag fish to move them around",
    ],
    todo: [
        "Add more Hacker News features (different story types, 'pages' of stories, etc)",
        "Do more testing and refining on mobile and touch screens",
        "Usability tweaks (ex. there are are lot of pointer events on the fish which can be a bit confusing, especially since the pointer target is usually moving)",
        "Bug fixes",
    ],
    technologies: ["JavaScript", "React", "CSS"],
    gitHub: "https://github.com/coribeecroft/hacker-news-frontend",
    tags: ["personal", "front-end"],
}
const hnMintContent = {
    id: "hn-mint",
    title: "Hacker News Front End",
    tagline: (
        <a href="../HNFE/" target="_blank">
            (See Hacker News front-end)
        </a>
    ),
    preview: (
        <a target="_blank" href="images/hnfe.png">
            <img
                {...{
                    className: "img-responsive",
                    title: "Hacker News Front End",
                    alt: "Screenshot of Hacker News Front End project.",
                    src: "images/hnfe.png",
                }}
            />
        </a>
    ),
    image: hnMintImage,
    bigImage: hnMintBigImage,
    description: (
        <>
            {/* The first of three Hacker News front-ends I made. I
                wrote this initially in 2017 as a way to learn React and
                try to make a more professional UI. I enjoyed using it
                to read Hacker News so I've made a few improvements
                recently. */}
            {"A front-end for "}
            <a href="https://news.ycombinator.com/">Hacker News</a>
            {`. I wrote this initially as way to learn React but I like using 
                it to read Hacker News so I've been gradually improving it.`}
        </>
    ),
    objectives: [
        "Learn React",
        `Make a nice UI (one of the first times
            that was more of a focus than an
            afterthought in one of my projects...
            except maybe my first Portfolio Site)`,
    ],
    inspiration: ``,
    todo: [
        "Make a better mobile interface",
        "Make a user profile page",
        <>
            Improve performance for loading comments. (The Hacker News API makes
            this difficult.
            {" Discussion "}
            <a
                target="_blank"
                href="https://news.ycombinator.com/item?id=32541609"
            >
                here.
            </a>
            )
        </>,
    ],
    technologies: ["JavaScript", "React", "CSS"],
    gitHub: "https://github.com/coribeecroft/hacker-news-frontend",
    tags: ["personal", "front-end"],
}

const firefliesContent = {
    id: "fireflies",
    title: "Fireflies",
    tagline: (
        <a href="../fireflies" target="_blank">
            (See Fireflies)
        </a>
    ),
    preview: (
        <a target="_blank" href="images/fireflies.png">
            <img
                {...{
                    className: "fireflies img-responsive",
                    title: "Fireflies",
                    alt: "Screenshot of Fireflies project",
                    src: "images/fireflies.png",
                }}
            />
        </a>
    ),
    image: firefliesImage,
    bigImage: firefliesBigImage,
    description:
        "A graphical demo built on React. I made this for fun on a weekend.",
    objectives: [],
    inspiration: ``,
    usageInstructions: [
        "Click to add a new firefly",
        "Click and hold to grow a new firefly (doesn't work on touch screens atm)",
        "Click and hold for a while after the firefly stops growing for an Easter egg :) (doesn't work on touch screens atm)",
        'Optionally specify number of fireflies in the query string using "numFireflies"',
    ],
    // myContribution: <></>,
    // whatWasChallenging: ``,
    todo: [
        "Fix performance problems",
        "Fix issues with touch controls",
        "Fix issues with window resizing",
        "Make dragging add a trail of fireflies",
    ],
    technologies: ["React", "JavaScript", "CSS"],
    gitHub: "https://github.com/CoriBeecroft/fireflies",
    tags: ["personal", "front-end"],
}

const forty96Content = {
    id: "forty96",
    title: "4096",
    preview: (
        <a target="_blank" href="images/4096.png">
            <img
                {...{
                    className: "img-responsive",
                    title: "4096",
                    alt: "Screenshot of 4096 project.",
                    src: "images/4096.png",
                }}
            />
        </a>
    ),
    image: forty96Image,
    bigImage: forty96BigImage,
    description: (
        <>
            {"A scripted version of the game "}
            <a href="https://gabrielecirulli.github.io/2048/" target="_blank">
                2048
            </a>
            {
                " where players have the option to specify an algorithm for automated gameplay."
            }
        </>
    ),
    objectives: [],
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
    technologies: ["JavaScript", "CSS", "JQuery"],
    gitHub: "https://github.com/coribeecroft/4096",
    tags: ["personal", "front-end"],
}

const mapTilesContent = {
    id: "mapTiles",
    title: "Map Tiles",
    // live-url: "" // deprecated?
    image: mapTilesImage,
    bigImage: "",
    description:
        "blah blah map tiles. More blah blah blah 'cause I need to fix the layout",
    objectives: [],
    todo: [],
    usageInstructions: [],
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    technologies: ["Postgresql", "Java", "Bash"],
    gitHub: "",
    tags: ["professional", "back-end"],
}

const projects = {
    mapTiles: mapTilesContent,
    "hn-fish": hnFishContent,
    "hn-mint": hnMintContent,
    fireflies: firefliesContent,
    forty96: forty96Content,
}

export default projects
