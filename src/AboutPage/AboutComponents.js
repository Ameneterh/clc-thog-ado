import "./AboutComponents.css";

function TeamMembers(props) {
  return (
    <div className="team-card">
      <div className="member-image"></div>
      <h2>{props.memberName}</h2>
      <p>{props.memberPosition}</p>
      <div className="social-connect"></div>
    </div>
  );
}

export default TeamMembers;
