const Header = (props) => {

    return (
        <nav className="navbar" id="header">
            {/* <div className="container-fluid">
                <a className="navbar-brand" href="#" id="logo" style={{ pointerEvents: 'none' }}>JR</a>
                <a className="nav-link" href="/RESUME.pdf" target="_blank">Resume</a>
            </div> */}
            <a href="#" className="navbar-brand">Jordan Rector</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header