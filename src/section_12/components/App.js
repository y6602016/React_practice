import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a front end js frameword",
  },
  {
    title: "How is React?",
    content: "React is useful",
  },
  {
    title: "How to use React?",
    content: "Use React by adding components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
  {
    label: "The Color Green",
    value: "green",
  },
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};
