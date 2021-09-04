import { functionTypeParam } from "@babel/types";
import React from "react";
import Input from "../components/Input";

function MainScreen() {
  return (
    <div className="container">
      <span className="lable">Search Planets...</span>
      <Input></Input>
    </div>
  );
}

export default MainScreen;
