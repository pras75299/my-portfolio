import React from "react";
import classes from './Home.module.css';
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaAngleDoubleDown } from 'react-icons/fa';
export default function Home() {
  return (<>
    <section className={classes.introSection} id="home">
        <div className={classes.bgCms}></div>
		<div className={classes.introInner}>
			<div className={classes.introContent}>
				<h2><span>I'm</span> Prashant Singh</h2>
				<p>Web Designer . Front-End Developer</p>
				<div className={classes.socialLinks}>
					<a href="https://www.linkedin.com/in/wordsprashant/" className={classes.facebook}><FaLinkedinIn/></a>
					<a href="https://github.com/pras75299" className={classes.twitter}><FaGithub/></a>
				</div>
				<div className={classes.downSection}>
                    <Link activeClass="active" spy={true} smooth={true} to='about' offset={200}>
                        <FaAngleDoubleDown className={classes.bounce}/>
                    </Link>					
			    </div>
		    </div>
		</div>
	</section>
    </>
  );
}
