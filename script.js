
const PortfolioPage = () => {
    return <div>
        <Header />
        <Main />
        <Footer />
    </div>
}

const Header = () => (<header className="color0">
    <img className="img-responsive" src="images/KeyName.png" />
</header>)

const Main = () => (<main>
    {/* Introduction */}
    <div id="intro" className="tile color1">
        <div className="container">
            <h2 className="col-lg-12">Introduction:</h2>
            <p>I'm a graduate from CU Boulder with a degree in math and a minor in computer science. This website is a place for me to share some of my programming projects. </p>
        </div>
    </div>

    {/* <!-- 4096 --> */}
    <div id="forty96" className="tile color2">
        <div className="container">
            <h2 className="col-lg-12">4096</h2>
            <h4><a href="../4096/index.html" target="_blank">(Click here to play 4096)</a></h4>

            <img className="img-responsive" title="4096" alt="4096" src="images/4096.png" />

            <section>
                <h3>Description:</h3>
                <p>A scripted version of the game <a href="https://gabrielecirulli.github.io/2048/" target="_blank">2048</a> where players have the option to specify an algorithm for automated gameplay.</p>	
            </section>
            
            <section>
                <h3>Inspiration: </h3>
                <p>After playing 2048 for a while, I realized I was subconsciously developing a simple algorithm for playing the game. I was pretty sure I could come up with a good enough algorithm for gameplay that it could probably get far past the 2048 tile. This seemed like more fun to me than playing the game, so I made 4096. </p>						
            </section>

            <section>
                <h3>Areas For Improvement: </h3>
                <ul>
                    <li>Touch controls</li>
                    <li>Better GUI</li>
                    <li>Make it so the game can be automatically run several times in a row and statistics about the runs will be shown(e.g. highest tile reached, how many moves it took, etc.)</li>
                </ul>
            </section>
            
            <section>
                <h3>Written With: </h3>
                <p>JavaScript, JQuery, HTML, CSS</p>
            </section>

            <section>
                <h3>GitHub: </h3>
                <a href="https://github.com/coribeecroft/4096" target="_blank">https://github.com/coribeecroft/4096</a>
            </section>
        </div>
    </div>

    {/* <!-- Hacker News Frontend --> */}
    <div id="HNFE" className="tile color0">
        <div className="container">
            <h2 className="col-lg-12">Hacker News Front-End</h2>
            <h4><a href="../hacker-news-frontend/index.html" target="_blank">(Click here to see Hacker News front-end)</a></h4>

            <img className="img-responsive" title="4096" alt="4096" src="images/HN.png" />

            <section>
                <h3>Description:</h3>
                <p>A front-end for <a href="https://news.ycombinator.com/">Hacker News</a>. The main purpose of this project was for me to learn React. </p>	
            </section>

{/*             <!-- <section>
                <h3>Features</h3>
                <ul>
                    <li>Automatically opens links to stories in a new tab</li>
                    <li>Displays story comments on the same page as the story list</li>
                </ul>
            </section> --> */}

            <section>
                <h3>TODO: </h3>
                <span>Note: I'm not actively working on this project anymore since the main purpose of it was to learn React and what's left to do won't contribute significantly to my knowledge/understanding of React.</span>
                <ul>
                    <li>Make a better mobile interface</li>
                    <li>Make it an infinite scroller</li>
                    <li>Make a users profile page</li>
                    <li>Make ask, show and job story lists (currently only top stories are shown)</li>
                </ul>
            </section>
            
            <section>
                <h3>Written With: </h3>
                <p>JavaScript, React, jQuery HTML, CSS</p>
            </section>

            <section>
                <h3>GitHub: </h3>
                <a href="https://github.com/coribeecroft/hacker-news-frontend" target="_blank">https://github.com/coribeecroft/hacker-news-frontend</a>
            </section>
        </div>
    </div>

    {/* <!-- Nesting Docs --> */}
    <div id="nesting-docs" className="tile color1">
        <div className="container">
            <div className="row">
                <h2 className="col-lg-12">Nesting Docs</h2>
                <h4><a href="http://coribeecroft.com/LODEssay" target="_blank">(Click here to see a nesting doc)</a></h4>
            </div>

            <div>
                <div>
                {/* <!-- <img className="img-responsive" title="ND" alt="ND" src="images/LOD.png"> --> */}
                    <section>
                        <h3>Description:</h3>
                        <p>Nesting Docs is a tool for creating HTML documents that can be read at varying levels of detail. The idea here is that different readers of a particular piece of writing have different levels of knowledge and interest in the subject of the piece. This tool allows readers to choose how detailed the document is while they're reading it. This is a project was a collaboration with my brother. </p>
                    </section>

                    <section>
                        <h3>My Contribution: </h3>
                        <ul>
                            <li>Refactored a messy, convoluted code-base into something simpler and easier to use, which reduced to total line-count by 40%</li>
                            <li>Fixed a fundamental flaw in the software</li>
                            <ul>
                                <li>Re-wrote most of the parser in a way that (incidentally) significantly simplified the markup language</li>
                                <li>Changed the structure of the document nodes in the DOM from flat to hierarchical</li>
                            </ul>
                        </ul>
                    </section>
                    
                    <section>
                        <h3>Written With: </h3>
                        <p>JavaScript, JQuery</p>
                    </section>

                    <h3>GitHub: </h3>
                    <p>This project is in a private repository</p>
                </div>	
            </div>
        </div>
    </div>

    {/* <!-- DSV --> */}
    <div id="lucidity" className="tile color2">
        <div className="container">
            <div className="row">
                <h2 className="col-lg-12">Lucidity</h2>
                <h4><a href="http://symbolflux.com/projects/avd" target="_blank">(Click here for more information on Lucidity)</a></h4>
            </div>

            <div>
                <div>
                    <section>
                        <h3>Description:</h3>
                        <p>This is one of my brother's projects that I helped with. It is a data structure and algorithm visualization tool that can be used for debugging or getting a better feel for how complex algorithms work. A more detailed description of this project can be found <a href="http://westoncb.com/projects/avd" target="_blank">here</a>.</p>
                    </section>

                    <section>
                        <h3>My Contribution: </h3>
                        <section>
                            <h5>High-level visual algorithm annotations for hash maps and trees</h5>
                            <p>This feature highlights important subsets of data at different stages of an algorithm's execution. For example, this could be used to show the current element in a data structure traversal algorithm or it could highlight the subset of elements being worked on in a divide and conquer algorithm. </p>	
                        </section>
                        <section>
                            <h5>Queue-based pop-up messaging system</h5>
                            <p>A system for delivering messages to users. Messages pop up at the bottom of the screen and fade out after a few seconds. If new messages pop up before the old ones disappear, a vertical queue of messages is formed.</p>
                        </section>
                        <section>
                            <h5>Idea for visually navigating large data structures</h5>
                            <p>Came up with a binary-search-inspired idea for one of the early systems of visual navigation of data structures (specifically trying to solve the problem of navigating very large data structures).</p>									
                        </section>
                        
                    </section>
                    
                    <section>
                        <h3>What Was Challenging: </h3>
                        <p>The most challenging thing about working on this project was learning the large, abstract codebase.</p>
                    </section>

                    <section>
                        <h3>Written With: </h3>
                        <p>Java</p>
                    </section>

                    <h3>GitHub: </h3>
                    <p>This project is in a private repository</p>
                </div>	
            </div>
        </div>
    </div>

    {/* <!-- Doom Pet --> */}
    <div id="doom-pet" className="tile color0">
        <div className="container">
            <h2 className="col-lg-12">Doom Pet</h2>
            <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/wcwLZ3V3lmE?autoplay=0" frameBorder="0" allowFullScreen></iframe>
            <section>
                <h3>Description:</h3>
                <p>A virtual pet game using graphics from id Software's original Doom games.</p>
            </section>
            <section>
                <h3>What Was Challenging: </h3>
                <p>This was a fairly large project with a lot of pieces so I got to solve a lot of interesting problems that varied from figuring out how to make projectile motion to creating systems for managing the states and behaviors of game entities (e.g. the pet, his food, etc).</p>
            </section>
            <section>
                <h3>Written With: </h3>
                <p>Java, a simple game framework</p>
            </section>
            <section>
                <h3>GitHub: </h3>
                <p>
                    <a href="https://github.com/coribeecroft/DoomPet" target="_blank">https://github.com/coribeecroft/DoomPet</a>
                </p>						
            </section>
        </div>
    </div>
</main>)

const Footer = () => (<footer className="color1">
    <div className="container">
        <span>
            <a href="mailto:coribeecroft@gmail.com">E-mail</a>
            | 
            <a href="https://github.com/coribeecroft" target="_blank">GitHub</a>
            | 
            <a href="https://www.linkedin.com/in/cori-beecroft-9546446b/" target="_blank">LinkedIn</a>	
        </span>				
        <p>© 2019 Cori Beecroft</p>
    </div>
</footer>)


const container = document.getElementById("site-container");
ReactDOM.render(<PortfolioPage />, container);