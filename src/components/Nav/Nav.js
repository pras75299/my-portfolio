import React from "react";
import classes from './Nav.module.css';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-scroll'

function Nav() {
  return (
    <header className={classes.headerSection}>
      <div className={classes.logo}>
        <Link activeClass="active" spy={true} smooth={true} to='home'>PRASHANT</Link>
      </div>
      <div className={classes.responsive}><AiOutlineBars/></div>
      <ul className={classes.menuList}>
        <li> <Link activeClass="active" spy={true} smooth={true} to='home'>Home</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true} to='about' offset={200}>About</Link></li>
        
      </ul>
	  </header>
  );
}
export default Nav;
