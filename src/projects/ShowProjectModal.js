import { NavItem } from "react-bootstrap"
import Modal from "react-bootstrap/Modal"

const ShowProjectModal = (props) => {
    const { show, project, handleClose } = props

    if (project) {

        const carouselImages = []

        project.images.forEach((element, i) => {
            if (i === 0) {
                carouselImages.push(<div className="carousel-item active">
                    <img src={element} key={0} className="d-block w-100 carousel-img" alt="carousel"/>
                </div>)
            } else {
                carouselImages.push(<div className="carousel-item">
                    <img src={element} key={i} className="d-block w-100 carousel-img" alt="carousel"/>
                </div>)
            }
        })

        return (
            <Modal show={show} onHide={handleClose} id='project-modal'>
                <Modal.Header closeButton id='project-modal-header' closeVariant='white'>
                    <Modal.Title id="project-modal-title">{project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body id='project-modal-body'>
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner" id="project-modal-carousel">
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
                    <p id='project-description'>{project.description}</p>
                </Modal.Body>
                <Modal.Footer id='project-modal-footer' className="d-flex justify-content-between">
                    {project.github ? <a className="modal-link" href={project.github} target="_blank">GitHub</a> : null}
                    {project.frontendGitHub ? <a className="modal-link" href={project.frontendGitHub} target="_blank">Client GitHub</a> : null}
                    {project.backendGitHub ? <a className="modal-link" href={project.backendGitHub} target="_blank">Api GitHub</a> : null}
                    <a className="modal-link" href={project.deployed} target="_blank">Deployed</a>
                </Modal.Footer>
            </Modal>
        )
    }
    
    return (
        <p style={{display: 'none'}}>No current project</p>
    )
}

export default ShowProjectModal