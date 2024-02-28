import { Link, NavLink } from "react-router-dom";

import classes from "./MobileNavigation.module.css";

const MobileNavigation = ({ openMenu, toggleMenu }) => {
  return (
    <div className={openMenu ? `${classes.mobileMenu} ${classes.open}` : classes.mobileMenu}>
      <div className={classes.content}>
        <nav aria-label="Основная">
          <ul>
            <li className={classes.link}>
              <NavLink to="/shop" onClick={toggleMenu}>
                Shop
              </NavLink>
            </li>

            <li className={classes.link}>
              <Link to="/blog" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className={classes.link}>
              <NavLink to="/About" onClick={toggleMenu}>
                About
              </NavLink>
            </li>
            <li className={classes.link}>
              <NavLink to="/Contact" onClick={toggleMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
