import React from "react";
import "../Profile/Profile.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";

function ContactProfile() {
	return (
		<div className="profile">
			<div className="profile__details">
				<div className="social-icon">
					<a href="#">
						<i className="fa fa-facebook-square"></i>
					</a>
					<a href="#">
						<i className="fa fa-google-plus-square"></i>
					</a>
					<a href="#">
						<i className="fa fa-instagram"></i>
					</a>
					<a href="#">
						<i className="fa fa-youtube-square"></i>
					</a>
					<a href="#">
						<i className="fa fa-twitter"></i>
					</a>
				</div>
				<div className="profile__details-name">
					<span className="primary__text">
						Hello, i'm <span className="highlighted__text">Joe</span>
					</span>
				</div>
				<div className="profile__details-role">
					<span className="primary__text">
						<h1>
							<Typical
								loop={Infinity}
								steps={[
									"Vast Tech Professional",
									3000,
									"Full Stack Developer",
									3000,
									"React.Js & React-Native Dev",
									3000,
									"Network Administrator",
									3000,
									"System Administrator",
									3000,
								]}
							/>
						</h1>
					</span>
				</div>
				<span className="profile__role-tagline">
					Get the best IT services!!!
				</span>
				{/* <div className="profile__contact">
					<Link to="/contact" className="contact__link">
						<span>Hire Me Now ! ! !</span>
					</Link>
					<Link to="/contact" className="contact__link">
						<span className="btn highlighted-btn">Request for Resume</span>
					</Link>
					<a href="CV.pdf" download="CV__OLUWADAMILARE JOSEPH ODULESI.pdf">
						<button className="btn highlighted-btn">Download Resume</button>
					</a>
				</div> */}
			</div>
		</div>
	);
}

export default ContactProfile;
