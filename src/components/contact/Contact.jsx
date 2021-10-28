import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <a
          style={{ color: "black", marginTop: "20px" }}
          href="mailto:nt554@drexel.edu"
        >
          <h4>nt554@drexel.edu</h4>
        </a>
        
      </div>
    </div>
  );
}
