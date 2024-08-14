import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Carousel } from "react-bootstrap"

const Bio = (props) => {

	// const modal = document.querySelector('.modal')
	// const { mainH2s } = props

	// if (modal) {
	// 	modal.addEventListener('show.bs.modal', () => {
	// 		mainH2s.forEach(h2 => {
	// 			h2.style.color = 'rgba(0,0,0,0)'
	// 		});
			
	// 	})
	// 	modal.addEventListener('hide.bs.modal', () => {
	// 		mainH2s.forEach(h2 => {
	// 			h2.style.color = 'rgba(255,255,255,0.115)'
	// 		})
	// 	})
	// }

	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const bioImages = [
		{ src: '/bio_photos/whitney.png', alt: "A candid shot of me overlooking the edge of a mountain" },
		{ src: '/bio_photos/wingspan.png', alt: "The colorful components of the board game Wingspan, nearly covering an entire table" },
		{ src: '/bio_photos/3D.png', alt: "An abstract 3D model made in UEFN, white and spaceship-like" },
		{ src: '/bio_photos/atitlan.png', alt: "A colorful street near Lake Atitlan in Guatemala, decorated with hanging decorations in preparation for a festival" },
		{ src: '/bio_photos/bar.png', alt: "The well behind a bar I worked at, full of color-coded and well-organized squeeze bottles of various syrups" },
		{ src: '/bio_photos/mall.png', alt: "A clean and modern mall built in UEFN" },
		{ src: '/bio_photos/chiapas.png', alt: "A lake surrounded by green mountains in Chiapas, Mexico with some lavender flowers in the foreground" },
		{ src: '/bio_photos/massive.png', alt: "A sprawling scene depicting many of the components laid out on a table for the board game Massive Darkness 2" },
		{ src: '/bio_photos/perspective.png', alt: "An abstract geometric drawing in black and white, depicting a scene like 4 identical skyscrapers looming above" },
		{ src: '/bio_photos/grafitti.png', alt: "Vivid street art on the side of a building in Chicago" },
		{ src: '/bio_photos/medieval.png', alt: "A small medieval town square at sunset, built in UEFN" },
		{ src: '/bio_photos/lights.png', alt: "Green northern lights over a well-lit cabin in Iceland" },
		{ src: '/bio_photos/spire.png', alt: "The defect's character board from the slay the spire board game" },
		{ src: '/bio_photos/tree.png', alt: "An abstract, futuristic 3D model of a tree, with silver trunk and branches, and bright orange leaves, built in UEFN" },
		{ src: '/bio_photos/reflection.png', alt: "A bay with sailboats during sunset, the water so still it perfectly mirrors the sky above" },
		{ src: '/bio_photos/shield.png', alt: "The material editor in UEFN, with a preview of a holographic and animated shield material" },
		{ src: '/bio_photos/switzerland.png', alt: "A lush and rocky valley in Switzerland, high up enough that clouds are lower than some of the peaks in the distance" },
		{ src: '/bio_photos/visual_greys.png', alt: "A drawing of overlapping spheres that are only defined by shading near their edges achieved using pointilism" },
	]

	const carouselImages = bioImages.map((img) => {
		return (
			<Carousel.Item>
				<img src={img.src} alt={img.alt} className="d-block w-100 bio-img" />
			</Carousel.Item>
		)
	})

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="modal-nav-button">
				<span className="nav-symbols">&#172;</span>about
			</Button>

			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton data-bs-theme="dark">
					<img src="/images/Logo_Transparent.png" alt="logo" id="logo-bio"/>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<p id="bio-intro">Hey, I'm Jordan!</p>
					<p className="bio-paragraph"> I'm a software and game developer with a knack for creative problem-solving and a keen eye for design thanks to my diverse background and wide-ranging interests.</p>
					<p className="bio-paragraph">I've had the chance to wear many hats over the years: developer, artist, manager, photographer, bartender, director, designer, you name it. That experience made me highly adaptable and has provided me many opportunities to be creative while tackling various challenges. This mix of creativity and problem-solving is what led me to software and game development. Now I'm using those skills to create fun and impactful projects.</p>
					<Carousel fade>
						{carouselImages}
					</Carousel>
					<p className="bio-paragraph">Outside of work, I'm a bit of a hobby hoarder. From cooking and reading, to hiking and gaming, I'm always diving into new activities. I love learning new things--whether it's a new recipe, picking up a coding language, or theorycrafting builds for the games I'm playing.</p>
					<p className="bio-paragraph">I'm really passionate about games. I think you can learn a lot about someone by watching them play or playing alongside them. I'm fascinated by how people make decisions and what drives their choices, especially in games.</p>
					<p className="footer-text">Jordan Rector</p>
					<p className="footer-text">Software, Web, & Game Developer</p>
					<p className="footer-text">Sacramento, CA</p>
					<p className="footer-text">rectorjordan94@gmail.com</p>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	)

}

export default Bio