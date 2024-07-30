import { Modal } from "react-bootstrap";

const ShowProjectModal = (props) => {

    let show = props.show
    let project = JSON.parse(props.currentProject)
    let handleClose = props.handleClose

    if (project) {

        // console.log(show)
        // console.log(project.name)
        console.log('**************************')
        console.log('project in if statement: ' + project)
        console.log('**************************')

        return (
            <Modal show={show} fullscreen={true} onHide={handleClose} id="project-modal">
                <Modal.Header closeButton id="project-header">
                    <Modal.Title id="project-name">{project.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body id="project-body">
                    <div className="container" id="deployed-cont">
                        <a href={project.deployed} target="_blank" rel="noreferrer" id="deployed-link">{project.deployed.slice(8)}</a>
                    </div>
                    <div className="container" id="descript1-cont">
                        <p id="descript1">{project.description1}</p>
                    </div>
                    <div className="container" id="video-cont">
                        {/* still need to add video files and properly link to them */}
                        <video src={project.video} id="project-video" autoPlay="true" controls="true" loop="true"></video>
                    </div>
                    <div className="container" id="descript2-cont">
                        <p id="descript2">{project.description2}</p>
                    </div>
                    <div className="container" id="built-cont">
                        {/* built with goes here */}
                    </div>
                    <div className="container" id="github-cont">
                        <a href={project.github} target="_blank" rel="noreferrer" id="github-link">GITHUB</a>
                        {/* maybe add button for next project here */}
                    </div>
                </Modal.Body>
            </Modal>
        )
    } else {
        return (
            <></>
        )
    }
    
}

export default ShowProjectModal

// import Modal from "react-bootstrap/Modal" 

// const ShowProjectModal = (props) => {
//     const { show, project, handleClose } = props

//     if (project) {
        
//         const carouselImages = []

//         project.images.forEach((element, i) => {
//             if (i === 0) {
//                 carouselImages.push(<div className="carousel-item active">
//                     <img src={element} key={0} className="d-block w-100 carousel-img" alt="carousel"/>
//                 </div>)
//             } else {
//                 carouselImages.push(<div className="carousel-item">
//                     <img src={element} key={i} className="d-block w-100 carousel-img" alt="carousel"/>
//                 </div>)
//             }
//         })

//         return (
//             <Modal show={show} onHide={handleClose} id='project-modal'>
//                 <Modal.Header closeButton id='project-modal-header' closeVariant='white'>
//                     <Modal.Title id="project-modal-title">{project.name}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body id='project-modal-body'>
//                     <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//                         <div className="carousel-inner" id="project-modal-carousel">
//                             {carouselImages}
//                         </div>       
//                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Previous</span>
//                     </button>
//                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span className="visually-hidden">Next</span>
//                     </button>
//                     </div>
//                     <p id='project-description'>{project.description}</p>
//                 </Modal.Body>
//                 <Modal.Footer id='project-modal-footer' className="d-flex justify-content-between">
//                     {project.github ? <a className="modal-link" href={project.github} target="_blank">GitHub</a> : null}
//                     {project.frontendGitHub ? <a className="modal-link" href={project.frontendGitHub} target="_blank">Client GitHub</a> : null}
//                     {project.backendGitHub ? <a className="modal-link" href={project.backendGitHub} target="_blank">Api GitHub</a> : null}
//                     <a className="modal-link" href={project.deployed} target="_blank">Deployed Link</a>
//                 </Modal.Footer>
//             </Modal>
//         )
//     }
    
//     return (
//         <p style={{display: 'none'}}>No current project</p>
//     )
// }

// export default ShowProjectModal