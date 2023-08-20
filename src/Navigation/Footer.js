import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2>The House of Glory</h2>
        <p>&copy; Copyright CLC Ado-Ekiti, 2022</p>
        <p>
          Tel: +2348030637978
          <span>Opp Holy Child Secondary School,</span>
          <span>Ado-Ikere Road, Ajilosun,</span>
        </p>
      </div>
      <div></div>
      <div className="footer-right">
        <p>
          Subscribe to get Latest <span>Updates and News</span>
        </p>
        <div className="subscribe">
          <form>
            <input
              type="text"
              name="subscribe"
              placeholder="Yourmail@gmail.com"
              className="subscribe-input"
            ></input>
          </form>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
