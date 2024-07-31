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
								<p className="bio-paragraph">Hi there! I'm Jordan, a software, web, and game developer with an unconventional blend of hospitality and game design experience. My experiences and wide-ranging interests have shaped me into a bit of a jack-of-all-trades, resulting in a highly adaptable skill set.</p>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">From software, web, and game development to restaurant management and menu development, UX and graphic design, photography and 3D modeling, I thrive on tackling complex problems and crafting user-friendly experiences.</p>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">I am deeply passionate about finding efficient and elegant solutions to modern challenges and am committed to continuous learning to stay at the forefront of this ever-evolving field.</p>
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
								<p className="bio-paragraph">Beyond my professional endeavors, I am a bit of a hobby hoarder with a wide range of interests. Whether it's reading fantasy novels, playing video games, hiking, camping, traveling, capturing moments through photography, cooking up new recipes, or drawing, I find joy in diverse activities.</p>
							</div>
							<div className="bio-container">
								<p className="bio-paragraph">Also, as a neurodivergent individual and a proud member of the LGBTQIA+ community, I bring a unique perspective to my work and life. My eclectic interests and inclusive mindset drive me to create meaningful and innovative solutions that resonate with a broad audience.</p>
							</div>
      				</div>
    			</div>
  			</div>
		</div>
		</>
        
    )
}

export default Bio