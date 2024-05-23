import About from "./body/about"
import Technologies from "./body/technologies"
import Projects from "./body/projects"
import Contact from "./body/contact"

const Body = (props) => {

    return (
        <div className="body container-fluid">
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </div>
    )
}

export default Body