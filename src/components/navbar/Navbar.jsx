import React, { useContext, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "@remixicon/react";
import { RiShoppingCartLine } from "@remixicon/react";
import { RiUserLine } from "@remixicon/react";
import { RiMenuLine } from "@remixicon/react";
import { RiCactusLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContex";

const Navbar = ({setShowLogin}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {getTotalAmount} = useContext(StoreContext)


  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <header className="header blur-header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          {" "}
          <i> <RiCactusLine /></i>Cactus{" "}
        </Link>

        <div className={`nav__menu ${isMenuOpen ? "show__menu" : ''} active-link `} id="nav-menu">
          <ul className="nav__list">
            <li onClick={toggleMenu} className="nav__item">
              <NavLink className="nav__link" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="nav__item">
              <NavLink className="nav__link" to="news">
                News
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="nav__item">
              <NavLink className="nav__link" to="shop">
                Shop
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="nav__item">
              <NavLink className="nav__link" to="care">
                Care
              </NavLink>
            </li>
            <li onClick={toggleMenu} className="nav__item">
              <NavLink className="nav__link" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <div onClick={toggleMenu} className="nav__close" id="nav-close">
            <i>
              {" "}
              <RiCloseLine />
            </i>
          </div>
        </div>
        <div className="nav__actions">
          <i onClick={setShowLogin}>
            {" "}
            <RiUserLine />
          </i>
          <Link className="cartLine" to="/cart">
          <div className={getTotalAmount() === 0 ? "" : 'dot'}></div>
          <i>
            {" "}
            <RiShoppingCartLine />
          </i>
          </Link>
          <div onClick={toggleMenu} className="nav__toggle" id="nav-toggle">
            <i>
              <RiMenuLine />
            </i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
