import { NavItem } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

const ShowProjectModal = (props) => {
    const { show, project, handleClose } = props

    if (project) {

        const carouselImages = []

        project.images.forEach((element, i) => {
            if (i === 0) {
                carouselImages.push(<div class="carousel-item active">
                    <img src={element} key={i} className="d-block w-100" alt="carousel"/>
                </div>)
            } else {
                carouselImages.push(<div class="carousel-item">
                    <img src={element} key={i} className="d-block w-100" alt="carousel"/>
                </div>)
            }
        })

        return (
            <Modal show={show} onHide={handleClose} id='project-modal'>
                <Modal.Header closeButton id='project-modal-header' closeVariant='white'>
                    <Modal.Title style={{color: '#000000'}}>{project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {carouselImages}
                        </div>       
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                    <p>{project.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    {project.github ? <a href={project.github} target="_blank">GitHub</a> : null}
                    {project.frontendGitHub ? <a href={project.frontendGitHub} target="_blank">Client GitHub</a> : null}
                    {project.backendGitHub ? <a href={project.backendGitHub} target="_blank">Api GitHub</a> : null}
                    <a href={project.deployed} target="_blank">Deployed</a>
                </Modal.Footer>
            </Modal>
        )
    }
    
    return (
        <p style={{display: 'none'}}>No current project</p>
    )
}

export default ShowProjectModal