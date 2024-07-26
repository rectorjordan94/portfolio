const Bio = (props) => {

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
        				This is where I'm gonna type some stuff and things for sure
      				</div>
      				<div class="modal-footer">
        				<button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
        				<button type="button" class="btn btn-info">Save changes</button>
      				</div>
    			</div>
  			</div>
		</div>
		</>
        
    )
}

export default Bio