import React from "react";

import Morning from "../assets/day.svg";
import Afternoon from "../assets/evening.svg";
import Evening from "../assets/night.svg";

export default function Greeting() {
  const date = new Date();
  const hour = date.getHours();

  let message;
  let svg;

  if (hour >= 6 && hour < 12) {
    svg = Morning;
    message = "Good Morning!";
  } else if (hour >= 12 && hour < 17) {
    svg = Afternoon;
    message = "Good Afternoon!";
  } else {
    svg = Evening;
    message = "Good Evening!";
  }

  return (
    <h1 className="greeting">
      <img src={svg} alt={message} className="greetingImage" />
      {message}
    </h1>
  );
}
