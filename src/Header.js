const Header = (props) => {

    return (
        <nav class="navbar" id="header">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="logo">JR</a>
                <div class="d-flex">
                    <a class="nav-link me-3" href="#">Resume</a>
                    <a class="nav-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Header