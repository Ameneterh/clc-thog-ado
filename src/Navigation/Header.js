import "./Header.css";
import clcLogo from "../images/logo_sotsm_header-1.png";
import PrimaryButton from "../SharedResources/PrimaryButtons";

function Header(props) {
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
      <PrimaryButton text="Contact Us" buttonURL="#/contact-us" />
    </div>
  );
}

export default Header;
