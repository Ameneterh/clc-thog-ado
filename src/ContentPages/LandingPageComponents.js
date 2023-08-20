import PrimaryButton from "../SharedResources/PrimaryButtons";
import "./LandingPageComponents.css";

function ChurchRelevance(props) {
  return (
    <div className="section-two-component">
      <div
        className="img-section"
        style={{ backgroundImage: `url(${props.imageURL})` }}
      ></div>
      <h1>{props.componentTitle}</h1>
      <p>{props.componentDescription}</p>
      <PrimaryButton text={props.text} />
    </div>
  );
}

export default ChurchRelevance;

function JoinOurServices(props) {
  return (
    <div
      className="sect-two-component-2"
      style={{ backgroundImage: `url(${props.componentImage})` }}
    >
      <div className="services-content">
        <h2>{props.serviceTag}</h2>
        <p>{props.serviceDays}</p>
        <p>{props.serviceTime}</p>
      </div>
    </div>
  );
}

export { JoinOurServices };
