//
import React from "react";
import presidentsArray from "./PresidentsArray";
import President from "./President";

const Presidents = () => {
  return (
    <div>
      {presidentsArray.map((president) => (
        <President
          name={president.first}
          last={president.last}
          year={president.year}
        />
      ))}
    </div>
  );
};

export default Presidents;
