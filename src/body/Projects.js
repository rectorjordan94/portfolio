// import { useState, useEffect } from 'react'
// import ShowProjectModal from "../projects/ShowProjectModal"

const Projects = (props) => {
    
    const myProjects = [
        {
            name: 'CENTIPEDE',
            deployed: 'rectorjordan94.github.io/Centipede/',
            description1: 'Remake of the classic arcade game, playable directly in the browser. Features keyboard & button inputs for player movement & projectiles, randomly generated environmental obstacles, level progression, player lives, game reset, & scoring.',
            video: '',
            description2: '',
            builtWith: 'HTML, CSS, JAVASCRIPT, CANVAS',
            github: 'https://github.com/rectorjordan94/Centipede',
        },
        {
            name: 'EVERDELL-WIKI',
            deployed: 'everdellwiki.fly.dev/',
            description1: "Collaborative, full-stack wiki app made in the MVC system with authentication, authorization, and full CRUD on the app's main resource. Built with HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Bootstrap, & LiquidJS.",
            video: '',
            description2: '',
            builtWith: ['HTML', 'CSS,', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'LIQUIDJS'],
            github: 'https://github.com/rectorjordan94/everdell-wiki',
        },
        {
            name: 'HOIST{M}',
            deployed: 'hoistm.netlify.app/',
            description1: "Full-stack MERN app and Google Drive/Dropbox clone using AWS s3 cloud storage and multer middleware for file upload. Collaborative project built with two fellow software engineers, in which I acted as frontend manager but also contributed to a significant portion of the backend development. Bulit with React, CSS, JavaScript, Express, Node.js, MongoDB, Mongoose, Axios, & Bootstrap.",
            video: '',
            description2: '',
            builtWith: ['HTML', 'CSS,', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'REACT', 'AXIOS'],
            github: 'https://github.com/rectorjordan94/hoistm-client',
        },
        {
            name: 'BLINK',
            deployed: 'https://blinkchat.netlify.app',
            description1: "Full-stack Slack clone where users can create and join different channels and chat with other users in real-time. Built with the MERN stack using the MVC system for organizing the code. Utilizes socket.io for bidirectional event-based communication between clients and server for chat functionality. Created with HTML, CSS, JavaScript, React, MongoDB, Mongoose, Express, and Node.js.",
            video: '',
            description2: '',
            builtWith: ['HTML', 'CSS,', 'JAVASCRIPT', 'NODE.JS', 'EXPRESS', 'MONGODB', 'MONGOOSE', 'BOOTSTRAP', 'REACT', 'AXIOS'],
            github: 'https://github.com/rectorjordan94/blink-client'
        }
    ]

    // const [projectString, setProjectString] = useState("")
    // const [currentProject, setCurrentProject] = useState(null)
    // const [modalShow, setModalShow] = useState(false)

    // const onClick = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     setProjectString(e.target.value)
    // }

    // useEffect(() => {
    //     if (projectString) {
    //         setCurrentProject(JSON.parse(projectString))
    //     }
    // }, [projectString])

    // useEffect(() => {
    //     if (currentProject) {
    //         setModalShow(true)
    //     }
    // }, [currentProject])
    
    return (
        <>
            
        </>
        
    )
}

export default Projects

/*
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
*/