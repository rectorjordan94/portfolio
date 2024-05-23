import { useState, useEffect } from 'react'
import ShowProjectModal from "../projects/ShowProjectModal"

const Projects = (props) => {
    
    const myProjects = [
        {
            name: 'Centipede',
            description: 'Remake of the classic arcade game, playable directly in the browser. Features keyboard & button inputs for player movement & projectiles, randomly generated environmental obstacles, level progression, player lives, game reset, & scoring. Developed wtih HTML, CSS, JavaScript, and canvas.',
            thumbnail: 'https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_score.png',
            github: 'https://github.com/rectorjordan94/Centipede',
            deployed: 'https://rectorjordan94.github.io/Centipede/',
            images: ['https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_start.png', 'https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_play.png', 'https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_score.png']
        },
        {
            name: 'Everdell-Wiki',
            description: "Collaborative, full-stack wiki app made in the MVC system with authentication, authorization, and full CRUD on the app's main resource. Built with HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Bootstrap, & LiquidJS.",
            thumbnail: 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png',
            github: 'https://github.com/rectorjordan94/everdell-wiki',
            deployed: 'https://everdellwiki.fly.dev/',
            images: ['https://github.com/rectorjordan94/everdell-wiki/raw/main/images/HOME1.png', 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png', 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/SHOWCARD1.png', 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/NEW1.png']
        },
        {
            name: 'hoist{m}',
            description: "Full-stack MERN app and Google Drive/Dropbox clone using AWS s3 cloud storage and multer middleware for file upload. Collaborative project built with two fellow software engineers, in which I acted as frontend manager but also contributed to a significant portion of the backend development. Bulit with React, CSS, JavaScript, Express, Node.js, MongoDB, Mongoose, Axios, & Bootstrap.",
            thumbnail: 'https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/label-filter.png',
            frontendGitHub: 'https://github.com/rectorjordan94/hoistm-client',
            backendGitHub: 'https://github.com/rectorjordan94/hoistm-api',
            deployed: 'https://hoistm.netlify.app/',
            images: ['https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/sign-in.png', 'https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/HOME.png', 'https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/label-filter.png', 'https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/show-file-modal.png', 'https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/edit-file-modal.png']
        },
        {
            name: 'BLINK',
            description: "Full-stack Slack clone where users can create and join different channels and chat with other users in real-time. Built with the MERN stack using the MVC system for organizing the code. Utilizes socket.io for bidirectional event-based communication between clients and server for chat functionality. Created with HTML, CSS, JavaScript, React, MongoDB, Mongoose, Express, and Node.js.",
            thumbnail: 'https://github.com/rectorjordan94/blink-api/raw/main/images/channel.png',
            frontendGitHub: 'https://github.com/rectorjordan94/blink-client',
            backendGitHub: 'https://github.com/rectorjordan94/blink-api',
            deployed: 'https://main--gorgeous-cranachan-8bbf33.netlify.app/',
            images: ['https://github.com/rectorjordan94/blink-api/raw/main/images/channel.png', 'https://github.com/rectorjordan94/blink-api/blob/main/images/CHANNEL_SEARCH.png?raw=true', 'https://github.com/rectorjordan94/blink-api/blob/main/images/THREAD.png?raw=true', 'https://github.com/rectorjordan94/blink-api/blob/main/images/AUTH.png?raw=true']
        }
    ]

    const [projectString, setProjectString] = useState("")
    const [currentProject, setCurrentProject] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    // const [triggerRefresh, setTriggerRefresh] = useState(false)

    const onClick = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setProjectString(e.target.value)
    }

    useEffect(() => {
        if (projectString) {
            setCurrentProject(JSON.parse(projectString))
        }
    }, [projectString])

    useEffect(() => {
        if (currentProject) {
            setModalShow(true)
        }
    }, [currentProject])

    return (
        <>
            <div className="projects container">
                <h2 className="pt-3 pb-1 section-header">Projects</h2>
                <hr className="line" />
                <div className="row mx-1">
                    <div className="col paragraph me-3 d-flex">
                        <button className='project-button' value={JSON.stringify(myProjects[0])} onClick={onClick}><img src={myProjects[0].thumbnail} alt="centipede thumbnail" className="w-100 image" style={{pointerEvents: 'none'}}/></button>
                    </div>
                    <div className="col paragraph d-flex">
                        <button className='project-button' value={JSON.stringify(myProjects[1])} onClick={onClick}><img src={myProjects[1].thumbnail} alt="everdell wiki thumbnail" className="w-100 image" style={{pointerEvents: 'none'}}/></button>
                    </div>
                </div>
                <div className="row mx-1 my-3">
                    <div className="col paragraph me-3 d-flex">
                        <button className='project-button' value={JSON.stringify(myProjects[2])} onClick={onClick}><img src={myProjects[2].thumbnail} alt="hoist thumbnail" className="w-100 image" style={{pointerEvents: 'none'}}/></button>
                    </div>
                    <div className="col paragraph d-flex">
                        <button className='project-button' value={JSON.stringify(myProjects[3])} onClick={onClick}><img src={myProjects[3].thumbnail} alt="blink thumbnail" className="w-100 image" style={{pointerEvents: 'none'}}/></button>
                    </div>
                </div>
            </div>
            <ShowProjectModal
                project={currentProject}
                show={modalShow}
                handleClose={() => setModalShow(false)}
            />
        </>
        
    )
}

export default Projects