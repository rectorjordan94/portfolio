import ShowProjectModal from "../projects/ShowProjectModal"
import { useState } from "react"
const Main = (props) => {

    const [currentProject, setCurrentProject] = useState(null)
    const [currentUEFN, setCurrentUEFN] = useState(null)
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

    const uefn = [
        {
            name: 'MEGASENET_AI',
            islandCode: '5806-0064-4467',
            description1: "Chess meets Mancala in this life-size, immersive, and interactive recreation of the wrold's oldest board game, the ancient Egyptian game of Senet. Battle against MegaBot in this solo version!",
            video: '',
            description2: 'Take turns rolling the die and moving your pawns around the board. Strategically trade spaces, move to safety, form blockades, and land on Special Spaces. Race to move your 5 pawns off the board to win.',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/5806-0064-4467?lang=en-US'
        },
        {
            name: 'MEGASENET_II',
            islandCode: '6917-8287-3493',
            description1: "Chess meets Mancala in this life-size, immersive, and interactive recreation of the wrold's oldest board game, the ancient Egyptian game of Senet. Battle against a friend in this 1v1 version!",
            video: '',
            description2: 'Take turns rolling the die and moving your pawns around the board. Strategically trade spaces, move to safety, form blockades, and land on Special Spaces. Race to move your 5 pawns off the board to win.',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/6917-8287-3493?lang=en-US'
        },
        {
            name: 'CRESCENT COVE PROP HUNT',
            islandCode: '6405-8295-6847',
            description1: "Ahoy mateys! What is that I see in the distance? 'Tis a Pirate themed Prop Hunt!",
            video: 'https://www.youtube.com/watch?v=1M1RjIGJ430',
            description2: '2-16 players. Pirates vs. Landlubbers. Infection style. 5 minute rounds. Fun pirate theme!',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/6405-8295-6847?lang=en-US'
        },
        {
            name: 'MEGASENET',
            islandCode: '1126-7559-9109',
            description1: 'The ancient Egyptian board game, Senet, travels through time and lands in the year 3050 where it enjoys crowds of supportive fans cheering you on as you battle an opponent in this engaging, futuristic, life-size recreation. Winner of the 2023 Epic MegaJam "Left to Your Own Devices" modifier category.',
            video: 'https://www.youtube.com/watch?v=iFw4hevcQMw',
            description2: 'In this 1v1 experience, players take turns rolling the die and moving one of their pawns to an available space. Pawns can move ahead, trade places with their competitor, form blockades, fall into hazards, and more. Move all 5 pawns off the board to win!',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/1126-7559-9109?lang=en-US'
        },
        {
            name: '1V1 FIGHT FOR THE AGES',
            islandCode: '4045-9417-6282',
            description1: 'Players travel and fight through the ages to defend the past or the future! Vote on weapons and try out different game modes. Battle your opponent and conquer all 5 ages to win, collect coins to get extras at vending machines, and most importantly, have fun!',
            video: 'https://www.youtube.com/watch?v=2EgLZI3HGPM',
            description2: 'Multiple game mode options (including No-Build). 12 Weapon classes to vote on. 5 ages to conquer, best of 5 rounds. Collect coins to use at vending machines.',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/4045-9417-6282?lang=en-US'
        },
        {
            name: 'FLOWERS IN DECEMBER',
            islandCode: '2524-8000-2895',
            description1: 'An escape map that takes 1-2 players (co-op) through a thrilling adventure, waking up in a remote research station overrun by zombies. Fight you way through the map and solve puzzles to escape the island!',
            video: 'https://www.youtube.com/watch?v=gGNUemGxttQ',
            description2: 'The Backstory: as elite military researchers, you and your team, if there are any survivors, have been recruited to respond to a distress signal received from a remote research station. Good luck!',
            fortnite: 'https://www.fortnite.com/@ghost.mouse/2524-8000-2895?lang=en-US'
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

    const onUEFNClick = (e) => {
        e.preventDefault()
        setCurrentUEFN(e.target.dataset.uefn)
        setModalShow(true)
    }

    const projectLis = projects.map((project, i) => {
        return(
            <a href="#" className='project-button' data-project={JSON.stringify(project)} onClick={onClick} key={i}>{project.name}</a>
        )
    })

    const uefnLis = uefn.map((uefn, i) => {
        return (
            <a href="#" className='project-button uefn-button' data-uefn={JSON.stringify(uefn)} onClick={onUEFNClick} key={i}>{uefn.name}</a>
        )
    })
    
    return (
        <section id="main-section">
            <div className="container">
                <h2 className="main-h2">PROJECTS</h2>
                <div className="container project-button-container">
                    {projectLis}
                </div>
                <h2 className="main-h2" id="uefn-h2">UEFN</h2>
                <div className="container project-button-container">
                    {uefnLis}
                </div>
            </div>
            <ShowProjectModal
                show={modalShow}
                currentProject={currentProject}
                currentUEFN={currentUEFN}
                handleClose={() => setModalShow(false)}
            />
        </section>
    )
}

export default Main

