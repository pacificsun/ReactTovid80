import React from "react";

const cockpit = props => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  };
  return (
    <div>
      <h1>{props.addTitle}</h1>
      <p>This is really working</p>
      <button style={style} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};
export default cockpit;
