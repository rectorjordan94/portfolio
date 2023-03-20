import { Modal } from "react-bootstrap/Modal"

const Projects = (props) => {
    
    const myProjects = [
        {
            name: 'Centipede',
            description: 'Remake of the classic arcade game, playable directly in the browser. Features keyboard & button inputs for player movement & projectiles, randomly generated environmental obstacles, level progression, player lives, game reset, & scoring. Developed wtih HTML, CSS, JavaScript, and canvas.',
            thumbnail: 'https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_score.png',
            github: 'https://github.com/rectorjordan94/Centipede',
            deployed: 'https://rectorjordan94.github.io/Centipede/'
        },
        {
            name: 'Everdell-Wiki',
            description: "Collaborative, full-stack wiki app made in the MVC system with authentication, authorization, and full CRUD on the app's main resource. Built with HTML, CSS, JavaScript, Node.js, Express, MongoDB, Mongoose, Bootstrap, & LiquidJS.",
            thumbnail: 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png',
            github: 'https://github.com/rectorjordan94/everdell-wiki',
            deployed: 'https://everdellwiki.fly.dev/'
        },
        {
            name: 'hoist{m}',
            description: "Full-stack MERN app and Google Drive/Dropbox clone using AWS s3 cloud storage and multer middleware for file upload. Collaborative project built with two fellow software engineers, in which I acted as frontend manager but also contributed to a significant portion of the backend development as well. Bulit with React, CSS, JavaScript, Express, Node.js, MongoDB, Mongoose, Axios, & Bootstrap.",
            thumbnail: 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png',
            frontendGitHub: 'https://github.com/rectorjordan94/hoistm-client',
            backendGitHub: 'https://github.com/rectorjordan94/hoistm-api',
            deployed: 'https://hoistm.netlify.app/'
        },
        {
            name: 'BLINK',
            description: "Full-stack Slack clone where users can create and join different channels and chat with other users in real-time. Built with the MERN stack using the MVC system for organizing the code. Utilizes socket.io for bidirectional event-based communication between clients and server for chat functionality. Created with HTML, CSS, JavaScript, React, MongoDB, Mongoose, Express, and Node.js.",
            thumbnail: 'https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png',
            frontendGitHub: 'https://github.com/rectorjordan94/hoistm-client',
            backendGitHub: 'https://github.com/rectorjordan94/hoistm-api',
            deployed: 'https://hoistm.netlify.app/'
        }
    ]



    return (
        <div className="projects container">
            <h2 className="pt-3 pb-1 section-header">Projects</h2>
            <hr className="line" />
            <div className="row mx-1">
                <div className="col paragraph me-3">
                    <h4 className="project-header">Centipede</h4>
                    <a href="https://github.com/rectorjordan94/Centipede"><img src="https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_score.png" alt="" className="w-100 image"/></a>
                </div>
                <div className="col paragraph">
                    <h4 className="project-header">Everdell-Wiki</h4>
                    <a href="https://github.com/rectorjordan94/everdell-wiki"><img src="https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png" alt="" className="w-100 image"/></a>
                </div>
            </div>
            <div className="row mx-1 my-3">
                <div className="col paragraph me-3">
                    <h4 className="project-header">hoist&#123;m&#125;</h4>
                    <a href="https://github.com/rectorjordan94/hoistm-client"><img src="https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/label-filter.png" alt="" className="w-100 image"/></a>
                </div>
                <div className="col paragraph">
                    <h4 className="project-header">BLINK</h4>
                    <a href="https://github.com/rectorjordan94/blink-api"><img src="https://github.com/rectorjordan94/blink-api/raw/main/images/channel.png" alt="" className="w-100 image"/></a>
                </div>
            </div>
        </div>
    )
}

export default Projects