import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, } from '@fortawesome/free-solid-svg-icons'


function Header() {

 const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('offcanvasRight');
    const offcanvasInstance = window.bootstrap?.Offcanvas.getInstance(offcanvasEl);
    if (offcanvasInstance) {
        offcanvasInstance.hide();
    }
};

    return (
        <div style={{ backgroundColor: "#232B3A" }}>
            <nav class="navbar container py-3">
                <Link to={'/'} class="navbar-brand" href="#">
                    <img src={require('../images/portfoliologo.png')} alt="Logo" style={{ width: "70px" }} />
                </Link>

                <ul class="nav justify-content-end  d-sm-none d-lg-flex d-none d-md-flex">
                    <li class="nav-item">
                        <Link to={'/home'} class="nav-link active" href="#">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/about'} class="nav-link" href="#">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/skills'} class="nav-link" >Skills</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/projects'} class="nav-link ">Projects</Link>
                    </li>
                    <li class="nav-item">
                        <Link to={'/contact'} class="nav-link " >Contact</Link>
                    </li>

                </ul>



                <button className="btn d-flexd d-lg-none d-sm-flex d-md-none text-white fs-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="offcanvas offcanvas-end h-50"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header d-flex justify-content-between" style={{ backgroundColor: "#232B3A" }}>
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">
                            <Link to="/" className="navbar-brand">
                                <img src={require('../images/portfoliologo.png')} alt="Logo" style={{ width: "70px" }} />
                            </Link>
                        </h5>
                        <button type="button"
                            style={{ color: "white", backgroundColor: "#232B3A", border: "none" }}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                            <FontAwesomeIcon icon={faX} />
                        </button>
                    </div>

                    <div className="offcanvas-body">
                        <div className="nav-2 justify-content-end">
                            <Link to="/home" className="nav-link-2 active" onClick={closeOffcanvas}>Home</Link>
                            <Link to="/about" className="nav-link-2" onClick={closeOffcanvas}>About</Link>
                            <Link to="/skills" className="nav-link-2" onClick={closeOffcanvas}>Skills</Link>
                            <Link to="/projects" className="nav-link-2" onClick={closeOffcanvas}>Projects</Link>
                            <Link to="/contact" className="nav-link-2" onClick={closeOffcanvas}>Contact</Link>
                        </div>
                    </div>
                </div>


            </nav>
        </div>
    )
}

export default Header