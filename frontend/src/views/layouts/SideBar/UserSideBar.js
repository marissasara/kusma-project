import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-user d-flex sticky-top">
        <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-dark-custom">
            <a href="/" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-dark-custom text-decoration-none">
                <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
            </a>
            <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                    <a href="#" className="nav-link text-dark-custom px-sm-0 px-2">
                        <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#submenu1" data-bs-toggle="collapse" className="nav-link text-dark-custom px-sm-0 px-2">
                        <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                </li>
                <li className="nav-item">
                    <Link to="/sign-in" className="nav-link text-dark-custom px-sm-0 px-2">
                        <i className="fs-5 bi-box-arrow-in-left"></i><span className="ms-1 d-none d-sm-inline">Sign Out</span>
                    </Link>
                </li>
             
            </ul>
            <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                <a href="#" className="d-flex align-items-center text-dark-custom text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">Joe</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-light text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default SideBar;