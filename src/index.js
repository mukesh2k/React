import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { fbook } from "./bookdata";
import Dep from "./book";

function Book() {
  return (
    <div className="bookde">
      <Dep booz={fbook}></Dep>
    </div>
  );
}

ReactDom.render(<Book />, document.getElementById("root"));
