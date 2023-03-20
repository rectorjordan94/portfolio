const Header = (props) => {

    return (
        <nav class="navbar" id="header">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="logo" style={{ pointerEvents: 'none' }}>JR</a>
                <div class="d-flex">
                    <a class="nav-link me-3" href="/Jordan_Rector_ATS_RESUME.pdf" target="_blank">Resume</a>
                    <a class="nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header