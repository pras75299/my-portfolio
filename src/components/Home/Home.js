import React from "react";
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedinIn, FaAngleDoubleDown } from 'react-icons/fa';
export default function Home() {
  return (<>
    <section className="introSection" id="home">
        <div className="bgCms"></div>
		<div className="introInner">
			<div className="introContent">
				<h2><span>I'm</span> Prashant Singh</h2>
				<p>Web Designer . Front-End Developer</p>
				<div className="socialLinks">
					<a href="https://www.linkedin.com/in/wordsprashant/" className="facebook"><FaLinkedinIn/></a>
					<a href="https://github.com/pras75299" className="twitter"><FaGithub/></a>
				</div>
				<div className="downSection">
                    <Link activeClass="active" spy={true} smooth={true} to='about' offset={200}>
                        <FaAngleDoubleDown className="bounce"/>
                    </Link>					
			    </div>
		    </div>
		</div>
	</section>
    </>
  );
}
