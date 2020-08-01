import React, { useState, Fragment } from "react";

const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);
  const [name, setName] = useState("");
  function handleClick() {
    console.log("i was click");
    setClickCount(clickCount + 1);
  }
  return (
    <Fragment>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <button onClick={handleClick}>Click Me</button>
      <p>
        {name} Clicked {clickCount} times
      </p>
    </Fragment>
  );
};

export default ClickCounter;
