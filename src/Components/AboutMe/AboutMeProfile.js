import React from "react";
import "../Profile/Profile.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import ProfilePicture2 from "./Profile-Picture.jpeg";

function AboutMeProfile() {
	const Alert = () => {
		return alert(
			"You are about to open this my social media profile on a new tab"
		);
	};
	return (
		<div className="profile__about">
			<div className="profile__details">
				<img src={ProfilePicture2} alt="" className="profile__picture2" />
				<div className="social-icon">
					<a
						href="https://www.linkedin.com/mwlite/in/oluwadamilare-joseph-odulesi-88b75557"
						onClick={Alert}
						target="_blank"
					>
						<i
							className="fa fa-linkedin-square"
							onClick={Alert}
							target="_blank"
						></i>
					</a>
					<a
						href="https://github.com/jossydee1"
						onClick={Alert}
						target="_blank"
					>
						<i className="fa fa-github"></i>
					</a>
					<a
						href="https://twitter.com/jossydee1"
						onClick={Alert}
						target="_blank"
					>
						<i className="fa fa-twitter"></i>
					</a>
					<a
						href="https://www.facebook.com/oluwadamilare.odulesi"
						onClick={Alert}
						target="_blank"
					>
						<i className="fa fa-facebook-square"></i>
					</a>

					<a
						href="https://www.instagram.com/jossydee1/"
						onClick={Alert}
						target="_blank"
					>
						<i className="fa fa-instagram"></i>
					</a>
					<a href="#" onClick={Alert} target="_blank">
						<i className="fa fa-youtube-square"></i>
					</a>
				</div>
				<div className="profile__about-contact">
					<Link to="/contact" className="contact__about-link">
						<span>Hire Me Now ! ! !</span>
					</Link>
					<Link to="/contact" className="contact__about-link">
						<span className="btn highlighted-btn">Request for Resume</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default AboutMeProfile;
