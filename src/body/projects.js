const Projects = (props) => {
    
    return (
        <div className="projects container">
            <h2 className="pt-3 pb-1 section-header">Projects</h2>
            <hr className="line" />
            <div className="row mx-1">
                <div className="col paragraph me-3">
                    <h4 className="project-header">Centipede</h4>
                    <img src="https://github.com/rectorjordan94/Centipede/raw/main/images/centipede_score.png" alt="" className="w-100"/>
                </div>
                <div className="col paragraph">
                    <h4 className="project-header">Everdell-Wiki</h4>
                    <img src="https://github.com/rectorjordan94/everdell-wiki/raw/main/images/CARDS1.png" alt="" className="w-100"/>
                </div>
            </div>
            <div className="row mx-1 my-3">
                <div className="col paragraph me-3">
                    <h4 className="project-header">hoist&#123;m&#125;</h4>
                    <img src="https://github.com/rectorjordan94/hoistm-client/raw/main/images_readme/label-filter.png" alt="" className="w-100"/>
                </div>
                <div className="col paragraph">
                    <h4 className="project-header">BLINK</h4>
                    <img src="https://github.com/rectorjordan94/blink-api/raw/main/images/channel.png" alt="" className="w-100"/>
                </div>
            </div>
        </div>
    )
}

export default Projects