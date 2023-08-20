import "./SermonComponents.css";

function SermonVideoComponent(props) {
  return (
    <div className="sermonDisplay">
      <iframe
        width="300"
        height="180"
        src={props.videoSource}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        title="Embedded youtube"
      />

      <div className="sermonDetails">
        <div
          className="authorImage"
          style={{ backgroundImage: `url(${props.speakerImg})` }}
        ></div>
        <div className="titleEdition">
          <p className="bold">{props.messageTitle}</p>
          <p className="sermonDate">
            <span>
              Sermon Date: <b>{props.date}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SermonVideoComponent;

function SermonAudioComponent(props) {
  return (
    <div className="audio-container">
      <audio src={props.audioSource} controls />

      <div className="sermonDetails">
        <div
          className="authorImage"
          style={{ backgroundImage: `url(${props.speakerImg})` }}
        ></div>
        <div className="titleEdition">
          <p className="bold">{props.messageTitle}</p>
          <p className="sermonDate">
            <span>
              Sermon Date: <b>{props.date}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { SermonAudioComponent };

//whats up here
