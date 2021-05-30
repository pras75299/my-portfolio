import React, { useEffect } from "react";
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-scroll'

function Nav() {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <header id="myHeader" className="headerSection">
      <div className="logo">
        <Link activeClass="active" spy={true} smooth={true} to='home'>PRASHANT</Link>
      </div>
      <div className="responsive"><AiOutlineBars/></div>
      <ul className="menuList">
        <li> <Link activeClass="active" spy={true} smooth={true} to='home'>Home</Link></li>
        <li><Link activeClass="active" spy={true} smooth={true} to='about' offset={200}>About</Link></li>
        
      </ul>
	  </header>
  );
}
export default Nav;
