import "./Contact.css";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import contactHero from "../images/contact-hero.png";
import youtube from "../images/youtube.jpeg";
import facebook from "../images/facebook.png";

function ContactPage(props) {
  return (
    <div>
      <Header />
      <div className="contactPage-body">
        <div
          className="contact-section-one"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <p>CONTACT US</p>
          <h2>
            Get in touch with <span>our CHURCH</span>
          </h2>
        </div>

        <div className="contact-section-two">
          <div className="form-section">
            <p>
              <span>contact form</span>
            </p>
            <form>
              <input
                type="text"
                name="full-name"
                placeholder="Your Full Name"
              ></input>
              <input type="email" name="email" placeholder="Your Email"></input>
              <input
                type="text"
                name="message-topic"
                placeholder="Topic"
              ></input>
              <textarea
                type="text"
                name="message-topic"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" value="Submit"></input>
            </form>
          </div>

          <div className="address-section">
            <p>
              Address:
              <span>
                opp holy child secondary school, ado-ikere road, ajilosun,
                ado-ekiti, ekiti state, nigeria.
              </span>
            </p>
            <p>
              Contact Details:
              <span>
                +2348030637978
                <br />
                churchemailaddress@email.com
              </span>
            </p>
            <p>
              Find Us Here:
              <span className="social-span">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img src={youtube} alt="youtube-logo" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <img src={facebook} alt="facebook-logo" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <img src={youtube} alt="youtube-logo" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
