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
			<button type="button" class="btn btn-primary modal-nav-button" data-bs-toggle="modal" data-bs-target="#aboutmodal">
			<span className="nav-symbols">&#172;</span>about
			</button>
			<div class="modal fade" id="aboutmodal" tabindex="-1" aria-labelledby="aboutModallabel" aria-hidden="true">
			<div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
    			<div class="modal-content">
      				<div class="modal-header" id="about-modal-header">
        				<h5 class="modal-title" id="about-modal-title">ABOUT</h5>
        				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      				</div>
						<div class="modal-body text-dark">
							<p className="bio-paragraph">Hi, I'm Jordan!</p>
							<p className="bio-paragraph">As a full-stack software engineer and web developer, I bring a unique blend of experience from hospitality and game design. My professional journey has equipped me with a versatile skill set, making me a bit of a jack-of-all-trades.</p>
							<p className="bio-paragraph">From software, web, and game development to restaurant management and menu development, UX and graphic design, photography and 3D modeling, I thrive on tackling complex problems and crafting user-friendly experiences.</p>
							<p className="bio-paragraph">I am deeply passionate about finding efficient and elegant solutions to modern challenges and am committed to continuous learning to stay at the forefront of this ever-evolving field.</p>
							<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
								<div class="carousel-inner">
									<div class="carousel-item active">
										<img src="/bio_photos/244055931_604682570718909_6364658061903751902_n.jpg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/mexcio.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/364260916_829877328745583_4285141526066776034_n.jpg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/atitlan3.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/chiapas.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/ice7.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/ice.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/st_louis.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/ice4.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/switz.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/sequoia.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/sanfran.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
									<div class="carousel-item">
										<img src="/bio_photos/ice3.jpeg" class="d-block w-100 bio-img" alt="..."></img>
									</div>
								</div>
								<button class="carousel-control-prev" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
									<span class="carousel-control-prev-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Previous</span>
								</button>
								<button class="carousel-control-next" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
									<span class="carousel-control-next-icon" aria-hidden="true"></span>
									<span class="visually-hidden">Next</span>
								</button>
							</div>
							<p className="bio-paragraph">Beyond my professional endeavors, I am a bit of a hobby hoarder with a wide range of interests. Whether it's reading fantasy novels, playing video games, hiking, camping, traveling, capturing moments through photography, cooking up new recipes, or drawing, I find joy in diverse activities.</p>
							<p className="bio-paragraph">Also, as a neurodivergent individual and a proud member of the LGBTQIA+ community, I bring a unique perspective to my work and life. My eclectic interests and inclusive mindset drive me to create meaningful and innovative solutions that resonate with a broad audience.</p>
      				</div>
    			</div>
  			</div>
		</div>
		</>
        
    )
}

export default Bio