import React from "react";
import DisplayingVariables from "./DisplayingVariables/DisplayingVariables";
import ParentComponent from "./PassingProps/ParentComponent";
import ClickCounter from "./Events/ClickCounter";
import Monkeys from "./Events/TenLittleMonkeysJumpingOnBed";
import ParentMorty from "./Fetching/ParentMorty";
import Navbar from './GenericLoginSignup/NavBar/Navbar';
import Auth from './GenericLoginSignup/Auth/Auth'

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <ParentComponent /> */}
      {/* <ClickCounter /> */}
      {/* <Monkeys /> */}
      {/* <ParentMorty /> */}
      <Navbar />
      <Auth />
    </div>
  );
}

export default App;
