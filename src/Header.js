const Header = (props) => {

    return (
        <nav className="navbar" id="header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" id="logo" style={{ pointerEvents: 'none' }}>JR</a>
                <div className="d-flex">
                    <a className="nav-link" href="/Jordan_Rector_ATS_RESUME.pdf" target="_blank">Resume</a>
                    {/* <a className="nav-link" href="#">Contact</a> */}
                </div>
            </div>
        </nav>
    )
}

export default Header