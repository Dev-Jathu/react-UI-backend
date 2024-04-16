import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faNotesMedical,
  faAddressCard,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar">
        <div class="container">
          <div className="logo">
            <div className="logoimg">
              <img src={Logo} />
            </div>
            <div>
              <h1 class="logos"> Thozan </h1>
            </div>
          </div>
          <div className="navadjust">
            <ul class="nav-links">
              <li>
                <FontAwesomeIcon icon={faHouse} className="icon" />{" "}
                <a href="/"> Home</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faNotesMedical} className="icon" />
                <a href="/Node">Note</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressCard} className="icon" />
                <a href="/About">About</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressBook} className="icon" />
                <a href="/Contact"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
