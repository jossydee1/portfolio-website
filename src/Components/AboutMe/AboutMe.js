import React from "react";
import Profile from "../Profile/Profile";
import "./AboutMe.css";
import AboutMeProfile from "./AboutMeProfile";

function Aboutme() {
	return (
		<div className="about">
			{/* <Profile /> */}

			<div className="about__text">
				<p className="p">
					Hi, thanks for showing interest in going through my profile.
				</p>
				<p className="p">
					My name is Joseph Oluwadamilare Odulesi. I am a Software Engineer who
					likes to develop digital products with great user experience. I desire
					to solve many life challenges with digital technology and make life
					experiences more interesting for humanity.
				</p>
				<p className="p">
					I have a vast knowledge of the Info-Tech industry cutting across
					Software Development, Content Creation, Digital Marketing, Network
					Administration, System Administration and other areas of IT.
				</p>
				<p className="p">
					I am open to taking up innovative roles, creating tech-driven products
					and providing solutions through digital technologies.
				</p>
			</div>
			<AboutMeProfile />
		</div>
	);
}

export default Aboutme;
