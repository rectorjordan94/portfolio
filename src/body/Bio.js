import { useEffect } from "react"

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
						<img src="/images/Logo_Transparent.png" alt="logo" id="logo-bio" />
        				<h5 className="modal-title" id="about-modal-title">ABOUT</h5>
        				<button type="button" id="about-close" className="btn-close" data-bs-dismiss="modal" data-bs-theme="dark" aria-label="Close"></button>
      				</div>
						<div className="modal-body text-dark" id="bio-modal-body">
							<div className="bio-container">
								<p className="bio-paragraph"><span id="bio-intro">Hey, I'm Jordan!</span> I'm a software and game developer with a knack for creative problem-solving and a keen eye for design thanks to my diverse background and wide-ranging interests.</p>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">I spent ten years in the food and beverage industry. That experience made me highly adaptable and gave me plenty of opportunities to be creative while tackling various challenges. This mix of creativity and problem-solving is what led me to software and game development. Now I'm using those skills to create fun and impactful projects.</p>
							</div>
							<div id="bio-img-container">
							<div id="carouselFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img src="/bio_photos/244055931_604682570718909_6364658061903751902_n.jpg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/mexcio.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/364260916_829877328745583_4285141526066776034_n.jpg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/atitlan3.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/chiapas.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/ice7.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/ice.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/st_louis.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/ice4.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/switz.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/sequoia.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/sanfran.jpeg" className="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div className="carousel-item">
										<img src="/bio_photos/ice3.jpeg" className="d-block w-100 bio-img" alt="..."></img>
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
								<p className="bio-paragraph">Outside of work, I'm a bit of a hobby hoarder. From photography and cooking, to hiking and gaming, I'm always diving into new activities. I love learning new things--whether it's a new recipe, picking up a coding language, or theorycrafting builds for the games I'm playing.</p>
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