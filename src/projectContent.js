import React from "react"
import hnMintImage from "./images/hn-mint.png"
import hnMintBigImage from "./images/hn-mint-big.png"
import hnFishImage from "./images/hn-fish.png"
import hnFishBigImage from "./images/hn-fish-big.png"
import firefliesImage from "./images/fireflies.png"
import firefliesBigImage from "./images/fireflies-big.png"
import forty96Image from "./images/4096.png"
import forty96BigImage from "./images/4096-big.png"

// template for project
/* {
    id: "",
    title: "",
    live-url: ""
    preview: <a target="_blank" href="">
        <img { ...{
            className: "img-responsive",
            title: "",
            alt: "",
            src: ""
        }} />
    </a>,
    description: "",
    objectives: [],
    todo: [],
    usageInstructions: []
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    technologies: "",
    gitHub: "",
    tags: ["professional", "personal", "front-end", "back-end", "full-stack"]
} */

const projects = {
    "hn-fish": {
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
    },
    "hn-mint": {
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
                Improve performance for loading comments. (The Hacker News API
                makes this difficult.
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
    },
    fireflies: {
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
    },
    forty96: {
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
                <a
                    href="https://gabrielecirulli.github.io/2048/"
                    target="_blank"
                >
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
    },
}

// template for project (old)
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
    usageInstructions: []
    myContribution: <></>,
    whatWasChallenging: ``,
    areasForImprovement: [],
    todo: [],
    writtenWith: "",
    gitHub: ""
} */

// const projectsOld = [
//     {
//         id: "hn-fish",
//         title: "Hacker News Fish",
//         tagline: (
//             <a href="../hn-fish/" target="_blank">
//                 (See Hacker News Fish)
//             </a>
//         ),
//         preview: (
//             <a target="_blank" href="images/hn-fish.png">
//                 <img
//                     {...{
//                         className: "img-responsive",
//                         title: "Hacker News Fish",
//                         alt: "Screenshot of Hacker News Fish project.",
//                         src: "images/hn-fish.png",
//                     }}
//                 />
//             </a>
//         ),
//         image: hnFishImage,
//         description: (
//             <>
//                 {"A "}
//                 <a href="https://news.ycombinator.com/">Hacker News</a>
//                 {` front-end where the stories are displayed on fish!`}
//             </>
//         ),
//         inspiration: `This was originally inspired by a comment my brother made about
//         wanting to see Hacker News headlines in something like a stock ticker. I
//         liked the idea but I wanted to make it into something more pleasant to
//         look at. Why fish? Honestly, I'm not quite sure, haha. I know I had the
//         water levels from Super Mario World in mind, even though I always hated
//         those levels. Maybe I just had a deep longing for bodies of water after
//         living in the Sonoran Desert for the last few years.`,
//         usageInstructions: [
//             "Click the headline on fish open the story in a new tab",
//             "Click on the fish to open up the comments section",
//             "Click and drag fish to move them around",
//         ],
//         todo: [
//             "Add more Hacker News features (different story types, 'pages' of stories, etc)",
//             "Do more testing and refining on mobile and touch screens",
//             "Usability tweaks (ex. there are are lot of pointer events on the fish which can be a bit confusing, especially since the pointer target is usually moving)",
//             "Bug fixes",
//         ],
//         writtenWith: ["JavaScript", "React", "CSS"],
//         gitHub: "https://github.com/coribeecroft/hacker-news-frontend",
//     },
//     {
//         id: "HNFE",
//         title: "Hacker News Front End",
//         tagline: (
//             <a href="../HNFE/" target="_blank">
//                 (See Hacker News front-end)
//             </a>
//         ),
//         preview: (
//             <a target="_blank" href="images/hnfe.png">
//                 <img
//                     {...{
//                         className: "img-responsive",
//                         title: "Hacker News Front End",
//                         alt: "Screenshot of Hacker News Front End project.",
//                         src: "images/hnfe.png",
//                     }}
//                 />
//             </a>
//         ),
//         image: hnMintImage,
//         description: (
//             <>
//                 {/* The first of three Hacker News front-ends I made. I
//                         wrote this initially in 2017 as a way to learn React and
//                         try to make a more professional UI. I enjoyed using it
//                         to read Hacker News so I've made a few improvements
//                         recently. */}
//                 {"A front-end for "}
//                 <a href="https://news.ycombinator.com/">Hacker News</a>
//                 {`. I wrote this initially as way to learn React but I like using
//             it to read Hacker News so I've been gradually improving it.`}
//             </>
//         ),
//         inspiration: ``,
//         todo: [
//             "Make a better mobile interface",
//             "Make a user profile page",
//             <>
//                 Improve performance for loading comments. (The Hacker News API
//                 makes this difficult.
//                 {" Discussion "}
//                 <a
//                     target="_blank"
//                     href="https://news.ycombinator.com/item?id=32541609"
//                 >
//                     here.
//                 </a>
//                 )
//             </>,
//         ],
//         writtenWith: ["JavaScript", "React", "CSS"],
//         gitHub: "https://github.com/coribeecroft/hacker-news-frontend",
//     },
//     {
//         id: "fireflies",
//         title: "Fireflies",
//         tagline: (
//             <a href="../fireflies" target="_blank">
//                 (See Fireflies)
//             </a>
//         ),
//         preview: (
//             <a target="_blank" href="images/fireflies.png">
//                 <img
//                     {...{
//                         className: "fireflies img-responsive",
//                         title: "Fireflies",
//                         alt: "Screenshot of Fireflies project",
//                         src: "images/fireflies.png",
//                     }}
//                 />
//             </a>
//         ),
//         image: firefliesImage,
//         description:
//             "A graphical demo built on React. I made this for fun on a weekend.",
//         inspiration: ``,
//         usageInstructions: [
//             "Click to add a new firefly",
//             "Click and hold to grow a new firefly (doesn't work on touch screens atm)",
//             "Click and hold for a while after the firefly stops growing for an Easter egg :) (doesn't work on touch screens atm)",
//             'Optionally specify number of fireflies in the query string using "numFireflies"',
//         ],
//         // myContribution: <></>,
//         // whatWasChallenging: ``,
//         todo: [
//             "Fix performance problems",
//             "Fix issues with touch controls",
//             "Fix issues with window resizing",
//             "Make dragging add a trail of fireflies",
//         ],
//         writtenWith: ["React", "JavaScript", "CSS"],
//         gitHub: "https://github.com/CoriBeecroft/fireflies",
//     },
//     {
//         id: "forty96",
//         title: "4096",
//         tagline: (
//             <a href="../4096/index.html" target="_blank">
//                 (Play 4096)
//             </a>
//         ),
//         preview: (
//             <a target="_blank" href="images/4096.png">
//                 <img
//                     {...{
//                         className: "img-responsive",
//                         title: "4096",
//                         alt: "Screenshot of 4096 project.",
//                         src: "images/4096.png",
//                     }}
//                 />
//             </a>
//         ),
//         image: forty96Image,
//         description: (
//             <>
//                 {"A scripted version of the game "}
//                 <a
//                     href="https://gabrielecirulli.github.io/2048/"
//                     target="_blank"
//                 >
//                     2048
//                 </a>
//                 {
//                     " where players have the option to specify an algorithm for automated gameplay."
//                 }
//             </>
//         ),
//         inspiration: `After playing 2048 for a while, I realized I was
//         subconsciously developing a simple algorithm for playing
//         the game. I was pretty sure I could come up with a good
//         enough algorithm for gameplay that it could probably get
//         far past the 2048 tile. This seemed like more fun to me
//         than playing the game, so I made 4096.`,
//         areasForImprovement: [
//             "Touch controls",
//             "Better GUI",
//             `Make it so the game can be automatically run several
//         times in a row and statistics about the runs will be
//         shown (e.g. highest tile reached, how many moves it
//         took, etc.)`,
//         ],
//         writtenWith: ["JavaScript", "JQuery"],
//         gitHub: "https://github.com/coribeecroft/4096",
//     },
//     /* {
//     id: "nesting-docs",
//     title: "Nesting Docs",
//     tagline: <a href="http://coribeecroft.com/LODEssay" target="_blank">
//         (See a nesting doc)
//     </a>,
//     description: `Nesting Docs is a tool for creating HTML documents that
//         can be read at varying levels of detail. The idea here
//         is that different readers of a particular piece of
//         writing have different levels of knowledge and interest
//         in the subject of the piece. This tool allows readers to
//         choose how detailed the document is while they're
//         reading it. This is a project was a collaboration with
//         my brother.`,
//     myContribution: <ul>
//         <li>
//             Refactored a messy, convoluted code-base into
//             something simpler and easier to use, which reduced
//             to total line-count by 40%
//         </li>
//         <li>Fixed a fundamental flaw in the software</li>
//         <ul>
//             <li>
//                 Re-wrote most of the parser in a way that
//                 (incidentally) significantly simplified the
//                 markup language
//             </li>
//             <li>
//                 Changed the structure of the document nodes in
//                 the DOM from flat to hierarchical
//             </li>
//         </ul>
//     </ul>,
//     writtenWith: "JavaScript, JQuery",
//     gitHub: "This project is in a private repository"
// }, {
//     id: "lucidity",
//     title: "Lucidity",
//     tagline: <a href="http://symbolflux.com/projects/avd" target="_blank">
//         (More information on Lucidity)
//     </a>,
//     description: <>
//         { "This is one of my brother's projects that I helped with. " +
//         "It is a data structure and algorithm visualization tool " +
//         "that can be used for debugging or getting a better feel " +
//         "for how complex algorithms work. A more detailed " +
//         "description of this project can be found " }
//         <a href="http://westoncb.com/projects/avd" target="_blank">here</a>
//         { "." }
//     </>,
//     myContribution: <>
//         <section>
//             <h5>High-level visual algorithm annotations for hash maps and trees</h5>
//             <p>
//                 This feature highlights important subsets of data
//                 at different stages of an algorithm's execution.
//                 For example, this could be used to show the current
//                 element in a data structure traversal algorithm or
//                 it could highlight the subset of elements being
//                 worked on in a divide and conquer algorithm.
//             </p>
//         </section>
//         <section>
//             <h5>Queue-based pop-up messaging system</h5>
//             <p>
//                 A system for delivering messages to users. Messages
//                 pop up at the bottom of the screen and fade out
//                 after a few seconds. If new messages pop up before
//                 the old ones disappear, a vertical queue of messages
//                 is formed.
//             </p>
//         </section>
//         <section>
//             <h5>Idea for visually navigating large data structures</h5>
//             <p>
//                 Came up with a binary-search-inspired idea for one
//                 of the early systems of visual navigation of data
//                 structures (specifically trying to solve the problem
//                 of navigating very large data structures).
//             </p>
//         </section>
//     </>,
//     writtenWith: "Java",
//     gitHub: "This project is in a private repository"
// },  */
//     /* {
//         id: "doom-pet",
//         title: "Doom Pet",
//         preview: (
//             <iframe
//                 {...{
//                     className: "embed-responsive-item",
//                     width: "500",
//                     height: "315",
//                     src: "https://www.youtube.com/embed/wcwLZ3V3lmE?autoplay=0",
//                     frameBorder: "0",
//                 }}
//                 allowFullScreen
//             ></iframe>
//         ),
//         description: (
//             <>
//                 A virtual pet game using graphics from iD Software's original
//                 Doom games.
//                 <div style={{ marginTop: 8 }}>
//                     Note: This is a very old project. I wrote it over winter
//                     break when I was in college. It really doesn't belong on
//                     this site anymore but people seem to enjoy the video so I'm
//                     leaving it for now.
//                 </div>
//             </>
//         ),
//         whatWasChallenging: `This was a fairly large project with a lot of pieces so I
//         got to solve a lot of interesting problems that varied from
//        figuring out how to make projectile motion to creating
//         systems for managing the states and behaviors of game
//         entities (e.g. the pet, his food, etc).`,
//         writtenWith: ["Java", "a simple game framework"],
//         gitHub: "https://github.com/CoriBeecroft/DoomPet",
//     }, */
// ]

export default projects
