import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";
import Profile from "../Profile/Profile";
import SkillsProfile from "./SkillsProfile";

function Skills() {
  const DevOps = () => {
    return (
      <div className="skill__devops">
        <span>AWS</span>
        <span>Terraform</span>
        <span>Docker</span>
        <span>Kubernetes</span>
        <span>Ansible</span>
        <span>Prometheus</span>
        <span>Grafana</span>
        <span>Jenkins</span>
        <span>CircleCI</span>
        <span>ArgoCD</span>
      </div>
    );
  };
  const Software = () => {
    return (
      <div className="skill__software">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React.js</span>
        <span>React-Native</span>
        <span>Firebase</span>
        <span>MongoDB</span>
        <span>Git</span>
        <span>WordPress</span>
      </div>
    );
  };
  const Network = () => {
    return (
      <div className="skill__network">
        <span>Network Administration</span>
        <span>Pfsense Installation</span>
        <span>Pfsense Management</span>
      </div>
    );
  };
  const System = () => {
    return (
      <div className="skill__system">
        <span>System Administration</span>
        <span>User account Management</span>
        <span>ManagedEngine Management</span>
        <span>Troubleshooting</span>
      </div>
    );
  };
  const Support = () => {
    return (
      <div className="skill__support">
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

  const [open0, setOpen0] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  useEffect(() => {
    const open = { open0, open1, open2, open3, open4 };
    const ifClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen0(false);
        setOpen1(false);
        setOpen2(false);
        setOpen3(false);
        setOpen4(false);
      }
    };
    document.addEventListener("mousedown", ifClickedOutside);

    return () => {
      document.removeEventListener("mousedown", ifClickedOutside);
    };
  }, [open0, open1, open2, open3, open4]);

  return (
    <div className="skill">
      <div className="skillset">
        <span>
          <p>
            Cloud DevOps Engineer
            {/* <i class="fa fa-angle-down"></i> */}
          </p>
          <DevOps />
        </span>
        <span>
          <p onClick={() => setOpen1(!open1)} ref={ref}>
            Software Engineer
            {/* <i class="fa fa-angle-down"></i> */}
          </p>
          <Software />
        </span>
        <span>
          <p onClick={() => setOpen1(!open1)} ref={ref}>
            System Administration
            {/* <i class="fa fa-angle-down"></i> */}
          </p>
          <System />
        </span>
        <span>
          <p onClick={() => setOpen4(!open4)} ref={ref}>
            IT Support Engineer
            {/* <i class="fa fa-angle-down"></i> */}
          </p>
          <Support />
        </span>
      </div>
      <SkillsProfile />
    </div>
  );
}

export default Skills;
