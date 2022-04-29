import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import Profile from "../Profile/Profile";

function Skills() {
	const Software = () => {
		return (
			<div className="skill__item">
				<span>HTML</span>
				<span>CSS</span>
				<span>JavaScript</span>
				<span>React.js</span>
				<span>React-Native</span>
				<span>Redux</span>
				<span>React Hooks</span>
				<span>Redux</span>
				<span>ES6</span>
				<span>React Context API</span>
				<span>Ionic React</span>
				<span>REST API</span>
				<span>GraphQl</span>
				<span>Express.js</span>
				<span>Node.js</span>
				<span>Firebase</span>
				<span>MongoDB</span>
				<span>Git</span>
				<span>WordPress</span>
			</div>
		);
	};
	const Network = () => {
		return (
			<div className="skill__item">
				<span>Network Administrator</span>
				<span>Pfsense</span>
				<span>JavaScript</span>
				<span>React.js</span>
				<span>React-Native</span>
				<span>Redux</span>
				<span>React Context API</span>
				<span>API</span>
			</div>
		);
	};
	const System = () => {
		return (
			<div className="skill__item">
				<span>System Administrator</span>
				<span>css</span>
				<span>JavaScript</span>
				<span>React.js</span>
				<span>React-Native</span>
				<span>Redux</span>
				<span>React Context API</span>
				<span>API</span>
			</div>
		);
	};
	const Support = () => {
		return (
			<div className="skill__item">
				<span>Software Installation</span>
				<span>Hardware Setup</span>
				<span>Communication</span>
				<span>Attention to details</span>
				<span>Problem-solving</span>
				<span>Time Management</span>
			</div>
		);
	};

	const ref = useRef();

	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);

	useEffect(() => {
		const open = { open1, open2, open3 };
		const ifClickedOutside = (e) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen1(false);
				setOpen2(false);
				setOpen3(false);
			}
		};
		document.addEventListener("mousedown", ifClickedOutside);

		return () => {
			document.removeEventListener("mousedown", ifClickedOutside);
		};
	}, [open1, open2, open3]);

	return (
		<div className="skill">
			<Profile />
			<div className="skillset">
				<span onClick={() => setOpen1(!open1)} ref={ref}>
					<p>Software Development</p>
					{open1 && <Software />}
				</span>
				{/* <span onClick={() => setOpen2(!open2)} ref={ref}>
					<p>Network Administration</p>
					{open2 && <Network />}
				</span> */}
				{/* <span onClick={() => setOpen3(!open3)} ref={ref}>
					<p>System Administration</p>
					{open3 && <System />}
				</span> */}
				<span onClick={() => setOpen3(!open3)} ref={ref}>
					<p>IT Support</p>
					{open3 && <Support />}
				</span>
			</div>
		</div>
	);
}

export default Skills;
