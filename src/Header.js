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
        <nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

