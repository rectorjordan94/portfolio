import { useEffect, useState } from "react"

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
        <nav className="navbar navbar-expand-lg bg-body-tertiary container-fluid" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="/images/1.png" alt="logo" id="logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" id="navToggle" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

