import React from "react";
export default function Search({ change, design }) {
  return (
    <input
      type="text"
      className={design.styled_search}
      onChange={(e) => change(e.target.value)}
      placeholder="search"
    ></input>
  );
}
