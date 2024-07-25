const Header = (props) => {

    return (
        <>
            <div className="container d-flex justify-content-between" id="navigation">
                <img src="/images/1.png" alt="logo" id="logo"/>
                <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><img src="/images/Menu_White.png" id="menu-icon" alt="menu button" /></button>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>
        </>
        
    )
}

export default Header

