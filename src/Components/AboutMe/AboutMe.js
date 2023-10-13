import React from "react";
import Profile from "../Profile/Profile";
import "./AboutMe.css";
import AboutMeProfile from "./AboutMeProfile";

function Aboutme() {
  return (
    <div className="about">
      {/* <Profile /> */}
      <AboutMeProfile />
      <div className="about__text">
        <p className="p">
          Hi, thank you for showing interest in going through my profile.
        </p>
        <p className="p">
          I am a highly skilled and motivated IT professional with a versatile
          skill set encompassing Cloud DevOps Engineering, Software Development,
          System Administration, and IT Support Engineering.
        </p>
        <p>
          I possess a deep understanding of Software Development lifecycle with
          skills encompassing CI/CD pipelines, infrastructure automation, and
          cloud technologies, backed by a successful history of delivering
          top-notch solutions and fostering effective collaboration within
          cross-functional teams.
        </p>
        <p>
          Recognized as an AWS Certified Cloud Practitioner, I possess expertise
          in cloud technologies and a well-rounded skill set including Python,
          JavaScript, React.js, Docker, Kubernetes, and Bash scripting. With an
          unwavering commitment to operational efficiency and collaboration, I
          am well-equipped to make valuable contributions to any organization.
        </p>
        <p>
          I have years of experience working as a System Administrator and IT
          Support Engineer, where I managed users for a large company. My role
          involved ensuring that IT resources were effectively managed, and
          users received proper IT support services.
        </p>
        <p>
          I am open to taking on innovative roles, creating tech-driven products
          and providing solutions through digital technologies.
        </p>
        {/* <p className="p">
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
        </p> */}
      </div>
    </div>
  );
}

export default Aboutme;
