import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__menu">
				<Link to="/" className="header__menu-link">
					<span>Home</span>
				</Link>
				<Link to="/skills" className="header__menu-link">
					<span>Skills</span>
				</Link>
				<Link to="/projects" className="header__menu-link">
					<span>Projects</span>
				</Link>
				<Link to="/about" className="header__menu-link">
					<span>About Me</span>
				</Link>
				<Link to="/contact" className="header__menu-link">
					<span>Contact Me</span>
				</Link>
			</div>
		</div>
	);
}

export default Header;
