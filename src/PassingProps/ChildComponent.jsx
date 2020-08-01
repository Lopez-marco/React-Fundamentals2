//
import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      {props.name} had {props.count} voter{" "}
    </div>
  );
};

export default ChildComponent;
