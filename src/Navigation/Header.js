import "./Header.css";
import React, { useState } from "react";
import clcLogo from "../images/logo_sotsm_header-1.png";
import PrimaryButton from "../SharedResources/PrimaryButtons";

function Header(props) {
  const [openProfile, setOpenProfile] = useState(false);
  function handleOpen() {
    setOpenProfile(!openProfile);
  }

  function cancelDropDown() {
    setOpenProfile(false);
  }

  return (
    <div className="headerBody">
      <div className="siteName" style={{ backgroundImage: `url(${clcLogo})` }}>
        <p>
          Christ Life Church<span>The House of Glory</span>
        </p>
      </div>
      <div className="nav">
        <ul>
          <li className={props.homeActive}>
            <a href="#/">HOME</a>
          </li>
          <li className={props.aboutActive}>
            <a href="#/about-us">ABOUT US</a>
          </li>
          <li className={props.sermonsActive}>
            <a href="#/sermons">SERMONS</a>
          </li>
          <li className={props.blogsActive}>
            <a href="#/e-flyers">BLOG</a>
          </li>
        </ul>
      </div>
      <div className="contact-btn">
        <PrimaryButton text="Contact Us" buttonURL="#/contact-us" />
      </div>
      <button className="drop-down-btn" onClick={handleOpen}>
        <hr />
        <hr />
        <hr />
      </button>
      {openProfile && (
        <div className="drop-down-body">
          <a href="#/">HOME</a>
          <a href="#/about-us" onClick={cancelDropDown}>
            ABOUT US
          </a>
          <a href="#/sermons" onClick={cancelDropDown}>
            SERMONS
          </a>
          <a href="#/e-flyers" onClick={cancelDropDown}>
            BLOG
          </a>
          <a href="#/contact-us" onClick={cancelDropDown}>
            CONTACT
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
