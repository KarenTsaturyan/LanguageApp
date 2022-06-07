import React, { useState } from "react";
import Dictionary from "./Dictionary";
import classes from "./MyWrite.module.css";

export default function Write() {
  let bool = true;
  let [Value, setValue] = useState({ id: 0, name: "hello", meaning: "" });
  let [data, setData] = useState([]);
  let headings = ["id", "name", "meaning"];
  const handleFilter = () => {
    let filtered = data.filter((task) => task.id < data.length);
    Value.id <= 0 ? (Value.id = 0) : Value.id--;
    setData(filtered);
  };

  return (
    <div className={classes.styled_wrapper}>
      <input
        className={classes.styled_text}
        type="number"
        value={data.length}
      ></input>
      <input
        className={classes.styled_text}
        type="text"
        value={Value.name}
        onChange={(e) => setValue({ ...Value, name: e.target.value })}
      ></input>
      <input
        className={classes.styled_text}
        type="text"
        value={Value.meaning}
        onChange={(e) => setValue({ ...Value, meaning: e.target.value })}
      ></input>
      <br />
      <input
        className={classes.styled_button}
        type="button"
        value="show"
        onClick={(e) => {
          setValue({ id: Value.id++, ...Value });
          setData((arr) => [...arr, Value]);
        }}
      ></input>
      <button
        disabled={!bool}
        className={classes.styled_button}
        onClick={handleFilter}
      >
        ⟲
      </button>
      <br />
      <Dictionary words={data} heading={headings} />
    </div>
  );
}
