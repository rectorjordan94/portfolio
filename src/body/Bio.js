import { useEffect, useState } from "react"

const Bio = (props) => {

	const modal = document.querySelector('.modal')
	const { mainH2s } = props

	if (modal) {
		modal.addEventListener('show.bs.modal', () => {
			mainH2s.forEach(h2 => {
				h2.style.color = 'rgba(0,0,0,0)'
			});
			
		})
		modal.addEventListener('hide.bs.modal', () => {
			mainH2s.forEach(h2 => {
				h2.style.color = 'rgba(255,255,255,0.115)'
			})
		})
	}

	return (
		<>
			<button type="button" className="btn btn-primary modal-nav-button" data-bs-toggle="modal" data-bs-target="#aboutmodal">
			<span className="nav-symbols">&#172;</span>about
			</button>
			<div className="modal fade" id="aboutmodal" tabIndex="-1" aria-labelledby="aboutModallabel" aria-hidden="true">
			<div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
    			<div className="modal-content">
						<div className="modal-header" id="about-modal-header">
							<div id="about-logo-cont">
								<img src="/images/Logo_Transparent.png" alt="logo" id="logo-bio" />
							</div>
							<div id="modal-title-cont">
								<h5 className="modal-title" id="about-modal-title">ABOUT</h5>
							</div>
        					<button type="button" id="about-close" className="btn-close" data-bs-dismiss="modal" data-bs-theme="dark" aria-label="Close"></button>
      				</div>
						<div className="modal-body text-dark" id="bio-modal-body">
							<div className="bio-container">
								<p id="bio-intro">Hey, I'm Jordan!</p>
								<p className="bio-paragraph"> I'm a software and game developer with a knack for creative problem-solving and a keen eye for design thanks to my diverse background and wide-ranging interests.</p>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">I've had the chance to wear many hats over the years: developer, artist, manager, photographer, bartender, director, designer, you name it. That experience made me highly adaptable and gave me plenty of opportunities to be creative while tackling various challenges. This mix of creativity and problem-solving is what led me to software and game development. Now I'm using those skills to create fun and impactful projects.</p>
							</div>
							<div id="bio-img-container">
							<div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img src="/bio_photos/whitney.png" className="d-block w-100 bio-img" alt="A candid shot of me overlooking the edge of a mountain"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/wingspan.png" className="d-block w-100 bio-img" alt="The colorful components of the board game Wingspan, nearly covering an entire table"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/3D.png" className="d-block w-100 bio-img" alt="An abstract 3D model made in UEFN, white and spaceship-like"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/atitlan.png" className="d-block w-100 bio-img" alt="A colorful street near Lake Atitlan in Guatemala, decorated with hanging decorations in preparation for a festival"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/bar.png" className="d-block w-100 bio-img" alt="The well behind a bar I worked at, full of color-coded and well-organized squeeze bottles of various syrups"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/mall.png" className="d-block w-100 bio-img" alt="A clean and modern mall built in UEFN"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/chiapas.png" className="d-block w-100 bio-img" alt="A lake surrounded by green mountains in Chiapas, Mexico with some lavender flowers in the foreground"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/massive.png" className="d-block w-100 bio-img" alt="A sprawling scene depicting many of the components laid out on a table for the board game Massive Darkness 2"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/perspective.png" className="d-block w-100 bio-img" alt="An abstract geometric drawing in black and white, depicting a scene like 4 identical skyscrapers looming above"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/grafitti.png" className="d-block w-100 bio-img" alt="Vivid street art on the side of a building in Chicago"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/medieval.png" className="d-block w-100 bio-img" alt="A small medieval town square at sunset, built in UEFN"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/lights.png" className="d-block w-100 bio-img" alt="Green northern lights over a well-lit cabin in Iceland"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/spire.png" className="d-block w-100 bio-img" alt="The defect's character board from the slay the spire board game"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/tree.png" className="d-block w-100 bio-img" alt="An abstract, futuristic 3D model of a tree, with silver trunk and branches, and bright orange leaves, built in UEFN"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/reflection.png" className="d-block w-100 bio-img" alt="A bay with sailboats during sunset, the water so still it perfectly mirrors the sky above"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/shield.png" className="d-block w-100 bio-img" alt="The material editor in UEFN, with a preview of a holographic and animated shield material"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/switzerland.png" className="d-block w-100 bio-img" alt="A lush and rocky valley in Switzerland, high up enough that clouds are lower than some of the peaks in the distance"></img>
										</div>
										<div className="carousel-item">
											<img src="/bio_photos/visual_greys.png" className="d-block w-100 bio-img" alt="A drawing of overlapping spheres that are only defined by shading near their edges achieved using pointilism"></img>
										</div>
										<button className="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
											<span className="carousel-control-prev-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Previous</span>
										</button>
										<button className="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
											<span className="carousel-control-next-icon" aria-hidden="true"></span>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
								</div>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">Outside of work, I'm a bit of a hobby hoarder. From cooking and reading, to hiking and gaming, I'm always diving into new activities. I love learning new things--whether it's a new recipe, picking up a coding language, or theorycrafting builds for the games I'm playing.</p>
							</div>	
							<div className="bio-container">
								<p className="bio-paragraph">I'm really passionate about games. I think you can learn a lot about someone by watching them play or playing alongside them. I'm fascinated by how people make decisions and what drives their choices, especially in games.</p>
							</div>
      				</div>
    			</div>
  			</div>
		</div>
		</>
        
    )
}

export default Bio