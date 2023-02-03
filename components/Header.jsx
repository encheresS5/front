import React from 'react';
import '../assets/img/apple-icon.png';
import '../assets/img/favicon.ico';
import '../assets/css/bootstrap.min.css';
import '../assets/css/templatemo.css';
import '../assets/css/custom.css';
import '../assets/css/fontawesome.min.css';

const Header = () => {
    const disconnect = () => {
        localStorage.removeItem('user_token');
        sessionStorage.removeItem('id');
        window.location.reload();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">

                    <a className="navbar-brand text-success logo h1 align-self-center" href="/">myBids</a>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                        <div className="flex-fill">
                            <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/recherche">Rechercher</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar align-self-center d-flex">
                            <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                <div className="input-group">
                                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="test ..."></input>
                                    <div className="input-group-text">
                                        <i className="fa fa-fw fa-search"></i>
                                    </div>
                                </div>
                            </div>

                            {
                                localStorage.getItem('user_token')
                                    ?
                                    <><a className="nav-icon position-relative text-decoration-none" href="/historique">
                                        <i className="fa fa-fw fa-user text-dark mr-3"></i>
                                    </a>
                                        <a onClick={disconnect} className="nav-icon position-relative text-decoration-none"><i className="fa fa-fw fa-sign-out-alt text-dark mr-3"></i></a></>
                                    :
                                    <a className="nav-icon position-relative text-decoration-none" href="/login">Sign in</a>
                            }
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Header;


