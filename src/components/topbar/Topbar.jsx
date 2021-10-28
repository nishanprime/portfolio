import "./topbar.scss";
import {
  Person,
  Mail,
  Instagram,
  Facebook,
  Linkden,
  GitHub,
} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            nishan.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+977 986 129 5873</span>
          </div>
          <a
            href="mailto:nt554@drexel.edu"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="itemContainer">
              <Mail className="icon" />

              <span>nt554@drexel.edu</span>
            </div>
          </a>
          <div className="itemContainer">
            <a
              href="https://www.instagram.com/nishan_nt/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.facebook.com/nishan380/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://github.com/nishanprime"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/nishan-thapa-18331a171/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="iconify icon" data-icon="mdi:linkedin"></span>
            </a>
          </div>
        </div>
        {/* <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
