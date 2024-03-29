import React from 'react';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><h3 className='myBrand'>Shahin</h3></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#about">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#passion">Passion</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#work">Work</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
            </div>
        </div>
</nav>
    );
};

export default Navbar;