import About from "./body/about"
import Technologies from "./body/technologies"
import Projects from "./body/projects"
import Contact from "./body/contact"

const Body = (props) => {

    return (
        <body className="body container-fluid">
            <About />
            <Technologies />
            <Projects />
            <Contact />
        </body>
    )
}

export default Body