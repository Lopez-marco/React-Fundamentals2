//
import React from "react";

const DisplayingVariables = () => {
  const movieCharacter = {
    name: "Han Solo",
    job: "pilot",
    bestFriend: "chewy",
  };

  const { name, job, bestFriend } = movieCharacter;

  return (
    <div>
      <p>
        This is a story about {name} and has a {job} for 12 years. one of his
        best friends in the story is {bestFriend}.
      </p>
    </div>
  );
};

export default DisplayingVariables;
