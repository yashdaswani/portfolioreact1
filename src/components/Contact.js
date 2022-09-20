import { useEffect, useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "./Animated";
import "./Contact.css";
import Map from "./Map";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "service_kgw07nd",
        "template_mk45zym",
        form.current,
        "t8vrO3CDebim5xVVs"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="contact-page">
        <div className="text-zone1 contact-text-zone">
          <h1
            style={{
              marginBottom: "0.5rem",
              color: "#05e2ff",
              fontFamily: "-moz-initial",
              fontSize: "3.5rem",
            }}
          >
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['G','e','t','','I','n','','T','o','u','c','h']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                <a href="/" className="contact-button">
                <div>
                    <span className="bg"></span>
                    <span className="base"></span>
                    <span className="text">
                        Send
                    </span>
                </div>
            </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* <div className="info-map">
          yash,
          <br />
          India,
          <br />
          Ghaziabad, Uttar Pradesh <br />
          <br />
          <span>harshwalia449@gmail.com</span>
        </div> */}
      <div className="map-wrap">
        <Map />
      </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Contact;
