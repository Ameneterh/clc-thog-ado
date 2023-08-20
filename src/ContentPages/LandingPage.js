import "./LandingPage.css";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import homeImageOne from "../images/homeImage-1.png";
import PrimaryButton from "../SharedResources/PrimaryButtons";
import ChurchRelevance from "./LandingPageComponents";
import { JoinOurServices } from "./LandingPageComponents";
import leftImage from "../images/man-praying.png";
import centerImage from "../images/couple-reading.png";
import rightImage from "../images/layinghands.png";
import sundayImage from "../images/sundayService.png";

function LandingPage() {
  return (
    <div>
      <Header homeActive="homeActive" />
      <div className="landingpage-body">
        <div
          className="landing-section-one"
          style={{ backgroundImage: `url(${homeImageOne})` }}
        >
          <p>Welcome to our CHURCH</p>
          <h2>
            Become a part of <span>our community</span>
          </h2>
          <PrimaryButton text="Learn More" />
        </div>
        <div className="landing-section-two">
          <h2>a church that's relevant</h2>
          <div className="landing-sec-two-links">
            <ChurchRelevance
              componentTitle="About Us"
              text="Know More"
              componentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ChurchRelevance
              componentTitle="Get Involved"
              text="Find Out How"
              componentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <ChurchRelevance
              componentTitle="Giving Back"
              text="Find Details"
              componentDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
        <div className="landing-section-three">
          <h2>sharing Christ's love and compassion</h2>
          <p>
            Join us and partner with us as we impact our communities through our
            monthly{" "}
            <span className="land-sect-3-span">
              IMPACT MISSION IN YOUR NEIGHBOURHOOD
            </span>
          </p>
          <div className="land-sect-three-grid">
            <div
              className="grid grid-left"
              style={{ backgroundImage: `url(${leftImage})` }}
            ></div>
            <div className="grid grid-center">
              <PrimaryButton text="Read More" />
              <div
                className="grid-center-image"
                style={{ backgroundImage: `url(${centerImage})` }}
              ></div>
            </div>
            <div
              className="grid grid-right"
              style={{ backgroundImage: `url(${rightImage})` }}
            ></div>
          </div>
        </div>
        <div className="landing-section-four">
          <h2>JOIN OUR SERVICES:</h2>
          <div className="sect-four-components">
            <JoinOurServices
              componentImage={centerImage}
              serviceTag="Army of the Lord"
              serviceDays="Every Monday,"
              serviceTime="5.30 pm - 7.00 pm"
            />
            <JoinOurServices
              componentImage={leftImage}
              serviceTag="Hour of Power"
              serviceDays="Every Wednesday,"
              serviceTime="5.00 pm - 6.00 pm"
            />
            <JoinOurServices
              componentImage={sundayImage}
              serviceTag="Sunday Power Service"
              serviceDays="Every Sunday,"
              serviceTime="9.00 am - 11.30 am"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
