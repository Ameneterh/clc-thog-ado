import "./SermonPosts.css";
import Footer from "../Navigation/Footer";
import Header from "../Navigation/Header";
import sermonsHeroImage from "../images/sermons-hero-image.png";
import SermonVideoComponent from "./SermonComponents";
import { SermonAudioComponent } from "./SermonComponents";
import videosDetails from "../Collections/videoResource";
import audioDetails from "../Collections/audioResources";

function SermonPosts(props) {
  return (
    <div>
      <Header sermonsActive="sermonsActive" />
      <div className="sermonsPage-body">
        <div
          className="sermons-section-one"
          style={{ backgroundImage: `url(${sermonsHeroImage})` }}
        >
          <p>SERMONS</p>
          <h2>
            take part in our sermons; <span>listen, download, share</span>
          </h2>
        </div>

        <div className="sermons-section-two">
          {/* <div className="sermons-two-top"></div> */}

          <div className="sermons-two-middle">
            <h1>watch our life transforming messages</h1>
            <div className="sermons-container">
              {videosDetails.map((showVideo) => {
                return (
                  <SermonVideoComponent
                    id={showVideo.id}
                    messageTitle={showVideo.messageTitle}
                    date={showVideo.date}
                    videoSource={showVideo.videoSource}
                    speakerImg={showVideo.speakerImg}
                  />
                );
              })}
            </div>
          </div>

          <div className="sermons-two-lower">
            <h1>
              listen to life changing messages
              <span>
                Based on the devotional <em>From Glory to Glory</em> by Bishop
                Francis Wale Oke
              </span>
            </h1>

            <p>
              These messages are broadcast on radio <b>Voice FM 89.9 Ekiti</b>{" "}
              Every Saturday 6.00-6.15 am
            </p>

            <blockquote>
              <em>
                "So faith comes from hearing [what is told], and what is heard
                comes by the [preaching of the] message concerning Christ."
              </em>
              <span>&#40;Romans 10:17 AMP&#41;</span>
            </blockquote>
            <div className="sermons-container">
              {audioDetails.map((audioFile) => {
                return (
                  <SermonAudioComponent
                    id={audioFile.id}
                    messageTitle={audioFile.messageTitle}
                    date={audioFile.date}
                    audioSource={audioFile.audioSource}
                    speakerImg={audioFile.speakerImg}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SermonPosts;
