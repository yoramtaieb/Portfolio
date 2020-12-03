import React from "react";
import Sidebar from "./Sidebar";

export default function App() {
  return (
    <div id="App">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
    </div>
  );
}
