import "./FlyersComponent.css";

function MagazineCard(props) {
  return (
    <div className="magDisplay">
      <div className="magCard">
        <iframe
          src={props.magpath}
          frameborder="0"
          height="200px"
          width="100%"
          title="pdf thumbnail"
        ></iframe>
      </div>

      <div className="magDetails">
        <div className="titleEdition">
          <p className="red bold">Click on title below to read or download:</p>
          <p className="bold">
            <a href={props.magpath} target="_blank" rel="noreferrer">
              <span>Title:</span>
              {props.title}
            </a>
          </p>
          <p className="editionDate">
            Edition: <span>{props.edition}</span>
          </p>
          <p className="editionDate">
            Published: <span>{props.date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MagazineCard;
