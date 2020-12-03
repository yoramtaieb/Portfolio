import React from "react";
import { slide as Menu } from "react-burger-menu";
import iconFb from "../../../assets/favicon/iconFb.svg";
import iconLkd from "../../../assets/favicon/iconLkd.svg";
import iconGit from "../../../assets/favicon/iconGit.svg";

export default function Sidebar(props) {
  return (
    <>
      <Menu {...props}>
        <a className="menu-item link1" href="/">
          Accueil
        </a>

        <a className="menu-item link2" href="/">
          Profil
        </a>

        <a className="menu-item link3" href="/">
          Projets
        </a>

        <a className="menu-item link4" href="/">
          Contact
        </a>
      </Menu>
    </>
  );
}
