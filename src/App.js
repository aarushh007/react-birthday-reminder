import React from "react";
import "./styles.css";
import data from "./data.js";
import List from "./List.js";

export default function App() {
  return (
    <div className="App">
      <List list={data} />
    </div>
  );
}
