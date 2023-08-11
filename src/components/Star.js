import React from "react";

function Star(props) {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}

export default Star;
