import React from "react";
import "./Home.css";
import Profile from "../Profile/Profile";

function Home() {
	return (
		<div className="home">
			<Profile />
			<div className="profile__picture">
				<div className="profile__picture-background"> </div>
			</div>
		</div>
	);
}

export default Home;
