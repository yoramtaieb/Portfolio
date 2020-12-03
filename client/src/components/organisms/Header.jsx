import React from "react";
import Burger from "../atoms/burgerMenu/Burger";
import iconNav from "../../assets/img/iconNav.png";

export default function Header() {
  return (
    <>
      <div className="header">
        <Burger />
        <div className="header-iconNav">
          <img src={iconNav} alt="iconNav" />
        </div>
      </div>
    </>
  );
}
