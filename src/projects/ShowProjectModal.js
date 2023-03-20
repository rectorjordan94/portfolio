import Modal from "react-bootstrap/Modal"

const ShowProjectModal = (props) => {
    const { show, project, handleClose } = props

    if (project) {
        return (
            <Modal show={show} onHide={handleClose} id='project-modal'>
                <Modal.Header closeButton id='project-modal-header' closeVariant='white'>
                    <Modal.Title style={{color: '#000000'}}>{project.name}</Modal.Title>
                </Modal.Header>
            </Modal>
        )
    }
    
    return (
        <p style={{display: 'none'}}>No current project</p>
    )
}

export default ShowProjectModal