import React from "react";
import { Link } from "react-router-dom";
import classes from './Nav.module.css';
import { AiOutlineBars } from 'react-icons/ai';

function Nav() {
  return (
    <header className={classes.headerSection}>
      <div className={classes.logo}>
        <Link to="/">PRASHANT</Link>
      </div>
      <div className={classes.responsive}><AiOutlineBars/></div>
      <ul className={classes.menuList}>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
      </ul>
	  </header>
  );
}
export default Nav;
