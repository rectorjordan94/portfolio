import { useEffect, useState } from "react"

const Header = (props) => {

    

    return (
        <nav className="navbar position-absolute position-fixed navbar-expand-lg bg-body-tertiary container-fluid" id="navbar">
            <div className="container-fluid navmenu-container">
                <div className="navmenu-header">
                    <a className="navbar-brand" href="#"><img src="/images/1.png" alt="logo" id="logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" id="navToggle" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">01 </span>about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">02 </span>technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">03 </span>linkedin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">04 </span>github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">05 </span>fortnite creator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><span className="nav-nums">06 </span>resume</a>
                        </li>
                    </ul>
                    <div className="nav-container">
                        <p class="navbar-text nav-descript">
                        Jordan Rector
                        </p>
                        <p class="navbar-text nav-descript">
                            Software, Web, & Game Developer
                        </p>
                        <p class="navbar-text nav-descript">
                            Sacramento California
                        </p>
                        <p class="navbar-text nav-descript nav-email">
                            rectorjordan94@gmail.com
                        </p>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}

export default Header

