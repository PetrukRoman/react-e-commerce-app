import { useCallback, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiMenu2Line } from "react-icons/ri";
import { ModalContext } from "../../store/ModalContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUser2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Logo from "../../assets/Logo.png";
import ButtonIcon from "../UI/Buttons/ButtonIcon";
import MobileNavigation from "./MobileNavigation";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const { openCart } = useContext(ModalContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.getElementById("root"));

    if (openMenu) {
      document.getElementById("root").style.overflow = "hidden";
      document.getElementById("root").style.height = "100svh";
    } else {
      document.getElementById("root").style = originalStyle;
    }

    return () => {
      document.getElementById("root").style = originalStyle;
    };
  }, [openMenu, toggleMenu]);

  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.mobileBtn}>
              <ButtonIcon onClick={toggleMenu}>
                <RiMenu2Line />
              </ButtonIcon>
            </div>

            <Link to="/" className={classes.logo}>
              <img src={Logo} alt="Logo" />
              <span>Furniro</span>
            </Link>
          </div>
          <nav className={classes.navigation} aria-label="Основная">
            <ul>
              <li className={classes.link}>
                <NavLink to="/shop" className={({ isActive }) => (isActive ? classes.active : "")}>
                  Shop
                </NavLink>
              </li>

              <li className={classes.link}>
                <NavLink to="/blog" className={({ isActive }) => (isActive ? classes.active : "")}>
                  Blog
                </NavLink>
              </li>
              <li className={classes.link}>
                <NavLink to="/About" className={({ isActive }) => (isActive ? classes.active : "")}>
                  About
                </NavLink>
              </li>
              <li className={classes.link}>
                <NavLink to="/Contact" className={({ isActive }) => (isActive ? classes.active : "")}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className={classes["icons-nav"]}>
            <Link to="/profile">
              <LuUser2 />
            </Link>

            <ButtonIcon>
              <IoSearch />
            </ButtonIcon>
            <Link to="/wishlist">
              <FaRegHeart />
            </Link>
            <ButtonIcon onClick={openCart}>
              <AiOutlineShoppingCart />
            </ButtonIcon>
          </div>
          <div className={classes.mobileBtn}>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>

      <MobileNavigation openMenu={openMenu} toggleMenu={toggleMenu} />
    </header>
  );
};
export default MainNavigation;
