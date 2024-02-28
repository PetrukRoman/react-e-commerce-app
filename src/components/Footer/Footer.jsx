import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div>
          <h2>Funiro.</h2>
          <p>
            400 University Drive Suite 200 Coral Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className={classes.navigation}>
          <h3>Links</h3>
          <ul>
            <li className={classes.link}>
              <Link to="/shop">Shop</Link>
            </li>
            <li className={classes.link}>
              <Link to="/blog">Blog</Link>
            </li>
            <li className={classes.link}>
              <Link to="/About">About</Link>
            </li>
            <li className={classes.link}>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={classes.navigation}>
          <h3>Links</h3>
          <ul>
            <li className={classes.link}>
              <Link to="/">Payment Options</Link>
            </li>
            <li className={classes.link}>
              <Link to="/">Returns</Link>
            </li>
            <li className={classes.link}>
              <Link to="/">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        <form className={classes.form}>
          <label htmlFor="email">NewsLetter</label>
          <input id="email" name="email" type="email" placeholder="Enter Your Evail Address " />
          <button>Subscribe</button>
        </form>
      </div>
      <p className={classes.copyright}>2023 furino. All rights reverved</p>
    </footer>
  );
};

export default Footer;
