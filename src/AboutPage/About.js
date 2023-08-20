import "./About.css";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import heroImage from "../images/AboutUsHero.png";
import joyFulfillment from "../images/joy&fulfilment.png";
import sharedValues from "../images/shared-values.png";
import charityEvents from "../images/charity-events.png";
import allWelcome from "../images/all-welcome.png";
import AboutComponents from "../AboutPage/AboutComponents";

function AboutPage(props) {
  return (
    <div>
      <Header aboutActive="aboutActive" />
      <div className="aboutPage-body">
        <div
          className="about-section-one"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <p>ABOUT US</p>
          <h2>Serving the world around us</h2>
        </div>

        <div className="about-section-two">
          <h2>welcome to our church</h2>
          <div className="about-sec-two-mission-vision">
            <div className="mission">
              <p>OUR MISSION</p>
              <h3>STRIVING FOR A BETTER TOMORROW</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="vision">
              <p>OUR VISION</p>
              <h3>STRIVING FOR A BETTER TOMORROW</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
            <div className="what-we-do">
              <p>WHAT WE DO</p>
              <h3>BRINGING PEACE AND JOY TO THE WORLD</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section-three">
          <h2>
            THE BENEFITS OF <span>JOINING OUR CHURCH</span>
          </h2>
          <div className="church-benefits">
            <div className="abt-3-left with-text">
              <h3>find fulfillment and joy</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
            <div
              className="abt-3-right with-picture"
              style={{ backgroundImage: `url(${joyFulfillment})` }}
            ></div>
          </div>

          <div className="church-benefits">
            <div
              className="abt-3-left with-picture"
              style={{ backgroundImage: `url(${sharedValues})` }}
            ></div>
            <div className="abt-3-right with-text">
              <h3>shared values</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
          </div>
          <div className="church-benefits">
            <div className="abt-3-left with-text">
              <h3>charity events</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
            <div
              className="abt-3-right with-picture"
              style={{ backgroundImage: `url(${charityEvents})` }}
            ></div>
          </div>
          <div className="church-benefits">
            <div
              className="abt-3-left with-picture"
              style={{ backgroundImage: `url(${allWelcome})` }}
            ></div>
            <div className="abt-3-right with-text">
              <h3>all are welcome</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section-four">
          <h2>meet our inspirational team</h2>
          <div className="about-sect4-components">
            <AboutComponents
              memberName="Dr Sunday A. Omoya"
              memberPosition="Resident Pastor"
            />
            <AboutComponents
              memberName="Mrs Comfort Omoya"
              memberPosition="Deaconness"
            />
            <AboutComponents
              memberName="Mr Jolayemi Emmanuel"
              memberPosition="Deacon"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
