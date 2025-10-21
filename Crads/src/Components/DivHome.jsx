import React from "react";
import { MainButton } from "../Custom/MainButton";

export default function DivHome({ head, content }) {
  return (
    <div className="container alert alert-primary mt-5">
      <h1>{head}</h1>
      <p>{content}</p>
      <MainButton>Click Me</MainButton>
    </div>
  );
}
