import "./PrimaryButton.css";

function PrimaryButton(props) {
  return (
    <a className="primary-btn" href={props.buttonURL}>
      {props.text}
    </a>
  );
}

export default PrimaryButton;
