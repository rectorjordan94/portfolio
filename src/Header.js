const Header = (props) => {

    return (
        // <>
        //     <div className="container d-flex justify-content-between" id="navigation">
        //         <img src="/images/1.png" alt="logo" id="logo"/>
        //         <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src="/images/Menu_White.png" id="menu-icon" alt="menu button" /></button>
        //     </div>
        //     <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        //         <div class="offcanvas-header">
        //             <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
        //             <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        //         </div>
        //         <div class="offcanvas-body">
        //             ...
        //         </div>
        //     </div>
        // </>
        <nav class="navbar navbar-dark bg-body-tertiary fixed-top">
            <div class="container-fluid align-items-start">
                <a class="navbar-brand" href="#"><img src="/images/1.png" alt="logo" id="logo"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-start">
                        <li class="nav-item">
                            <a class="nav-link" href="#">LinkedIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">GitHub</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fortnite Creator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Header

