import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <h3>{props.customText}</h3>
      <p onClick={props.click}>
        I am a person. Name: {props.name} and age: {props.age}
        <span>{props.children}</span>
      </p>
      <input type="text" onChange={props.changed} value={props.customText} />
    </div>
  );
};

export default Person;
