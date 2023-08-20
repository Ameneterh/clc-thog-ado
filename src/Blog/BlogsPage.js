import "./BlogsPage.css";
import Header from "../Navigation/Header";
import Footer from "../Navigation/Footer";
import blogsHero from "../images/blog-hero.png";
import MagazineCard from "./FlyersComponent";
import flyersDetails from "../Collections/flyersDetails";

function BlogPosts(props) {
  return (
    <div>
      <Header blogsActive="blogsActive" />
      <div className="blogs-body">
        <div
          className="blogs-section-one"
          style={{ backgroundImage: `url(${blogsHero})` }}
        >
          <p>read</p>
          <h2>
            read, download,
            <span>
              and <u>freely</u> share
            </span>
          </h2>
        </div>

        <div className="blogs-section-two">
          <p className="bible-verse">
            <i>
              "Get the truth and never sell it; also get wisdom, discipline, and
              good judgment."
            </i>
            <span>Proverbs 23:23 NLT</span>
          </p>
          <div className="blogs-display">
            {flyersDetails.map((showFlyer) => {
              return (
                <MagazineCard
                  id={showFlyer.id}
                  magPic={showFlyer.magPic}
                  title={showFlyer.title}
                  edition={showFlyer.edition}
                  date={showFlyer.date}
                  magpath={showFlyer.magpath}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogPosts;
