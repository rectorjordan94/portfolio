// import About from "./body/Abou
import Technologies from "./body/Technologies"
import Projects from "./body/Projects"
import Contact from "./body/Contact"
import About from './body/About'

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