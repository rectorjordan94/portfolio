import ShowProjectModal from "../projects/ShowProjectModal"
import { useState } from "react"
const Main = (props) => {

    const [currentProject, setCurrentProject] = useState(null)
    const [modalShow, setModalShow] = useState(false)

    const projects = [
        {
            name: 'BLINK',
            deployed: 'https://blinkchat.netlify.app',
            description1: "Slack clone where users can create and join different channels and chat with other users in real-time. ",
            video: '/videos/Blink_Walkthrough.mp4',
            description2: 'Utilizes socket.io for bidirectional event-based communication between clients and server for live chat functionality.',
            builtWith: ['HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'REACT', 'AXIOS'],
            github: 'https://github.com/rectorjordan94/blink-client'
        },
        {
            name: 'HOIST{M}',
            deployed: 'https://hoistm.netlify.app',
            description1: "Google Drive/Dropbox clone using AWS s3 cloud storage and multer middleware for file upload.",
            video: '/videos/Hoist_Walkthrough.mp4',
            description2: 'Collaborative project built with two fellow software engineers, in which I acted as frontend manager but also contributed significantly to the backend development.',
            builtWith: ['HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'REACT ', 'AXIOS'],
            github: 'https://github.com/rectorjordan94/hoistm-client',
        },
        {
            name: 'EVERDELL-WIKI',
            deployed: 'https://everdellwiki.fly.dev',
            description1: "Collaborative wiki app based on the board game Everdell, a card drafting and worker placement game, and a personal favorite of mine.",
            video: '/videos/Everdell_Walkthrough.mp4',
            description2: `Made in the MVC system with authentication, authorization, and full CRUD on the app's main resource.`,
            builtWith: ['HTML', 'CSS', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'LIQUIDJS'],
            github: 'https://github.com/rectorjordan94/everdell-wiki'
        },
        {
            name: 'CENTIPEDE',
            deployed: 'https://rectorjordan94.github.io/Centipede',
            description1: 'Remake of one of my favorite arcade games, playable directly in the browser.',
            video: '/videos/Centipede_Walkthrough.mp4',
            description2: 'Features both keyboard and button inputs for player movement and firing projectiles, randomly generated environmental obstacles, level progression, game reset, scoring, and custom pixel art.',
            builtWith: ['HTML', 'CSS', 'JAVASCRIPT', 'CANVAS'],
            github: 'https://github.com/rectorjordan94/Centipede',
        }
    ]

    // when each button is clicked, set the current project and then set show to true
    const onClick = (e) => {
        e.preventDefault()
        // set the current project
        setCurrentProject(e.target.dataset.project)
        // open the modal
        setModalShow(true)
    }

    const projectLis = projects.map((project, i) => {
        return(
            <button className='project-button' data-project={JSON.stringify(project)} onClick={onClick} key={i}>{project.name}</button>
        )
    })
    
    return (
        <section id="main-section">
            <div className="container">
                <h2 className="main-h2">PROJECTS</h2>
                <div className="container project-button-container">
                    {projectLis}
                </div>
                <h2 className="main-h2">UEFN</h2>
                <ul className="main-ul">
                    <li className="main-li megasenet">MEGASENET_AI</li>
                    <li className="main-li megasenet">MEGASENET_II</li>
                    <li className="main-li">CRESCENT COVE PROP HUNT</li>
                    <li className="main-li">MEGASENET</li>
                    <li className="main-li">1V1 FIGHT FOR THE AGES</li>
                    <li className="main-li">FLOWERS IN DECEMBER</li>
                </ul>
            </div>
            <ShowProjectModal
                show={modalShow}
                currentProject={currentProject}
                handleClose={() => setModalShow(false)}
            />
        </section>
    )
}

export default Main

