import React from "react";
import {
  BsFillPersonPlusFill,
  BsArchiveFill,
  BsFillGearFill,
  BsGrid1X2Fill,
  BsListCheck,
  BsListColumns,
  BsPeopleFill,
  BsFillFileTextFill,
} from "react-icons/bs";
function SideBar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img
            src="assets/img/icon.png"
            className="img-fluid"
            width={30}
            alt=""
            data-aos="zoom-out"
            data-aos-delay="300"
          />{" "}
          FECAKARATE
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> MENU
            <ul className="sub-menu">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Retour</a>
              </li>
            </ul>
          </a>
        </li>
        <li className="sidebar-list-item membres">
          <a href="">
            <BsPeopleFill className="icon" /> MEMBRES
            <ul className="sub-menu">
              <li>
                <a href="#">
                  <BsFillFileTextFill className="icon" />
                  Listes
                </a>
              </li>
              <li>
                <a href="#">
                  <BsFillPersonPlusFill className="icon" />
                  Ajouter
                </a>
              </li>
            </ul>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> LICENCES
            <ul className="sub-menu">
              <li>
                <a href="#">Club</a>
              </li>
              <li>
                <a href="#">Membre</a>
              </li>
            </ul>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListColumns className="icon" /> DEMANDES
            <ul className="sub-menu">
              <li>
                <a href="#">Licence Membre</a>
              </li>
              <li>
                <a href="#">Licence Club</a>
              </li>
            </ul>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsArchiveFill className="icon" /> FACTURES
            <ul className="sub-menu">
              <li>
                <a href="#">Licence Club</a>
              </li>
              <li>
                <a href="#">Licence Membres</a>
              </li>
            </ul>
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" /> PARAMETRES
            <ul className="sub-menu">
              <li>
                <a href="#">Modifier</a>
              </li>
              <li>
                <a href="#">Deconnexion</a>
              </li>
            </ul>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
