import React from "react";
// import "./Profile.css";
import Typical from "react-typical";
import { Link } from "react-router-dom";

function ProjectProfile() {
	const Alert = () => {
		return alert(
			"You are about to open this my social media profile on a new tab"
		);
	};
	return (
		<div className="profile__Project">
			<div className="profile__details">
				<div className="project__social-icon">
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
				<div className="profile__details-name">
					<span className="primary__text">
						Hello, i'm{" "}
						<span className="highlighted__text">
							Joseph Oluwadamilare Odulesi
						</span>
					</span>
				</div>
				<div className="profile__details-role">
					<span className="primary__text-Project">
						<h1>
							<Typical
								loop={Infinity}
								steps={[
									"Software Developer",
									5000,

									"Network Administrator",
									5000,
									"System Administrator",
									5000,
									"IT Support Profesional",
									5000,
									"Professional Content Writer",
									5000,
								]}
							/>
						</h1>
					</span>
				</div>
				<span className="profile__role-tagline">
					Get the best Info Tech services!!!
				</span>
				<div className="profile-Project__contact">
					<Link to="/contact" className="contact-Project__link">
						<span>Hire Me Now ! ! !</span>
					</Link>
					<Link to="/contact" className="contact-Project__link">
						<span className="btn highlighted-btn">Request for Resume</span>
					</Link>
					{/* <a href="CV.pdf" download="CV__OLUWADAMILARE JOSEPH ODULESI.pdf">
						<button className="btn highlighted-btn">Download Resume</button>
					</a> */}
				</div>
			</div>
		</div>
	);
}

export default ProjectProfile;
