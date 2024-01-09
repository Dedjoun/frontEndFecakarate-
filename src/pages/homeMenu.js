import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function HomeMenu(){
    return (
        <Fragment>
             <div className="container d-flex align-items-center justify-content-between">
                <Link to="/">
                    <img src="assets/img/logo.png" alt=""/>
                    <h1>FECAKARATE<span>.</span></h1>
                </Link>
                <nav id="navbar" className="navbar">
                <ul>
                    <li><a href="#hero">Accueil</a></li>
                    <li><a href="#about">A-propos</a></li>
                    <li><a href="#menu">Bureau Executif</a></li>
                    <li><a href="#events">Evenements</a></li>
                    <li className="dropdown"><a href="#"><span>Listes</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                        <li className="dropdown"><a href="#"><span>CLUBS</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                            <li><Link to="/arbitre">ARBITRES</Link></li>
                            <li><Link to="/athltes">ATHLETES</Link></li>
                            <li><Link to="/coachs">COACHS</Link></li>
                            <li><Link to="/clubs">CLUBS</Link></li>
                            <li><Link to="/membres">MEMBRES</Link></li>
                        </ul>
                        </li>
                        <li><Link to="/cn">CEINTURES NOIRE</Link></li>
                    </ul>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="dashboard.html">Connexion</a></li>
                </ul>
                </nav>
                <a className="btn-book-a-table" href="#">Paiement Licence</a>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
        </Fragment>
    )
}


export default HomeMenu;