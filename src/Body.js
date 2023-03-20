import About from "./body/About"
import Technologies from "./body/Technologies"
import Projects from "./body/Projects"
import Contact from "./body/Contact"

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