const Contact = (props) => {

    return (
        <div className="container">
            <h2 className="pt-3 pb-1 section-header">Contact</h2>
            <hr className="line" />
            <div className="row mx-1 mb-3">
                <div className="col contact-info me-3">
                    <a href="https://github.com/rectorjordan94" className="link-contact">GitHub</a>
                </div>
                <div className="col contact-info me-3">
                    <p className="m-0">rectorjordan94@gmail.com</p>
                </div>
                <div className="col contact-info">
                    <a href="https://www.linkedin.com/in/rectorjordan943/" className="link-contact">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact