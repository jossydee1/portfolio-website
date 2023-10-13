import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Profile from "../Profile/Profile";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import ContactProfile from "./ContactProfile";

function ContactMe() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const navigate = useNavigate();
  const form = useRef();
  console.log(process.env);

  // const { handleSubmit, register } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("", "", form.current, "")
      // .sendForm(
      // 	`
      // 	${process.env.REACT_APP_SERVICE_ID}`,
      // 	`${process.env.REACT_APP__TEMPLATE_ID}`,
      // 	form.current,
      // 	`${process.env.REACT_APP_YOUR_USER_ID}`
      // )
      .then(
        (result) => {
          console.log(result.text);

          navigate("/");
        },
        (error) => {
          // console.log(error.text);
        }
      );
    e.target.reset();

    // if (!input3) {
    // 	alert = "Email address is required";
    // } else if (!/\S+@\S+\.\S+/.test(input3)) {
    // 	alert = "Email address is invalid";
    // }
  };

  return (
    <div className="contact">
      <ContactProfile />
      <div className="contact__form">
        <form ref={form}>
          <div className="contact__line1">
            <label>
              <div className="form__name">
                <span className="text">Your Name:</span>
                <span className="star">*</span>
              </div>

              {/* <br /> */}
              <input
                type="text"
                value={input1}
                name="contact_name"
                onChange={(e) => setInput1(e.target.value)}
              />
            </label>
            <br />
            <label>
              <div className="form__name">
                <span className="text">Company Name:</span>
                <span className="star"></span>
              </div>
              {/* <br /> */}
              <input
                type="text"
                value={input2}
                name="company_name"
                onChange={(e) => setInput2(e.target.value)}
              />
              <br />
            </label>
          </div>
          <div className="contact__line2">
            <label>
              <div className="form__name">
                <span className="text">Email:</span>
                <span className="star">*</span>
              </div>
              {/* <br /> */}
              <input
                type="email"
                value={input3}
                name="email"
                onChange={(e) => setInput3(e.target.value)}
                // ref={register({
                // 	required: "Required",
                // 	pattern: {
                // 		value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                // 		message: "invalid email address",
                // 	},
                // })}

                // {...register("Email", {
                // 	required: true,
                // 	pattern: /^\S+@\S+$/i,
                // })}
              />
              <br />
            </label>
          </div>
          <div className="contact__line3">
            <label>
              <div className="form__name">
                <span className="text">Message:</span>
                <span className="star">*</span>
              </div>
              {/* <br /> */}
              <textarea
                placeholder="Type your message here"
                type="text"
                value={input4}
                name="message"
                onChange={(e) => setInput4(e.target.value)}
              />
            </label>
          </div>
          <div className="button">
            <button onClick={onSubmit} disabled={!input1 || !input3 || !input4}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
