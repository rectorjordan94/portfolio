const Main = (props) => {

    const projects = [
        {
            name: 'BLINK',
            description: "BLINK is a Slack clone where users can create and join different channels and chat with other users in real time. ",
            skills: ["HTML", "CSS", "JAVASCRIPT", "REACT", "MONGODB", "MONGOOSE", "EXPRESS", "NODE.JS", "SOCKET.IO"],
            video: "",
            images: ["https://github.com/rectorjordan94/blink-api/raw/main/images/BLINK_ERD.png", "https://github.com/rectorjordan94/blink-api/raw/main/images/component_diagram.png"],
            frontEndGitHub: 'https://github.com/rectorjordan94/blink-client',
            backendGitHub: 'https://github.com/rectorjordan94/blink-api',
            deployed: 'https://blinkchat.netlify.app',
        }
    ]

    







    /* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>   */ 

    return (
        <section id="main-section">
            <div className="container">
                <h2 className="main-h2">PROJECTS</h2>
                <ul className="main-ul">
                    <li className="main-li">BLINK</li>
                    <li className="main-li">HOIST&#123;M&#125;</li>
                    <li className="main-li">EVERDELL WIKI</li>
                    <li className="main-li">CENTIPEDE</li>
                </ul>
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
        </section>
    )
}

export default Main