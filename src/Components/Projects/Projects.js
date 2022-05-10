import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";
import ProjectProfile from "./ProjectProfile";
import "./Projects.css";

function Projects() {
	const project = [
		{
			title: "Amazon Clone",
			description:
				"This project is a clone of wwww.amazon.com with the payment method integration. Ypu can interact with the eCommerce website and feel free to make purchases of any of the displayed products with the dummy currency made available.",
			url: "https://amazproject-1.web.app",
		},
		{
			title: "Facebook Clone",
			description:
				"This is a replica of www.facebook.com which allows you to post and view other people's posts",
			url: "https://facebook-project-c7847.web.app",
		},
		{
			title: "Wallet Authentication",
			description: "Website developed for cryptocurrency wallets",
			url: "https://walletauth.netlify.app",
		},
		{
			title: "Portfolio",
			description: "My Portfolio website",
			url: "https://jossy.largefocus.com",
		},
		{
			title: "DLC Africa",
			description: "Developed for the Dana Group company.",
			url: "https://dlcafrica.com",
		},
		{
			title: "DANA Pharmaceuticals Ltd",
			description: "Developed for DANA Pharmaceuticals Ltd",
			url: "https://danapharmaceuticals.com",
		},
		{
			title: "DANA GROUP Website",
			description: "Official website of Dana Group",
			url: "https://danagroup.com",
		},
	];

	const Alert = () => {
		return alert("This link will open in new tab");
	};
	return (
		<div className="project">
			<ProjectProfile />
			<div className="project__list">
				<div className="project__list-header">
					<p>Title</p>
					<p>Description</p>
					<p>Url</p>
					{/* <p>Index</p> */}
				</div>
				<div className="project__list-body">
					{project.map((item, index) => (
						<div className="project__list-item">
							<p className="">{item.title}</p>
							<p className="">{item.description}</p>

							<p className="item__url">
								<a href={item.url} onClick={Alert} target="_blank">
									{item.url}
								</a>
							</p>
							{/* <p className="">{index}</p> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
