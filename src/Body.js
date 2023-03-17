import About from "./body/about"
import Technologies from "./body/technologies"
import Projects from "./body/projects"

const Body = (props) => {

    return (
        <body className="body container-fluid">
            <About />
            <Technologies />
            <Projects />
        </body>
    )
}

export default Body