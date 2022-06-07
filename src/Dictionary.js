import React, { useState } from "react";
import classes from "./MyDictionary.module.css";
import Search from "./Search";

export default function Dictionary({ words, heading }) {
  const [search, setSearch] = useState("");
  const filteredWords = words.filter((word) => {
    return word.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className={classes.styled_table_wrapper}>
      <Search change={setSearch} design={classes} />
      <table className={classes.styled_table}>
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredWords.map((word) => (
            <tr>
              <td>{word.id}</td>
              <td>{word.name}</td>
              <td>{word.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
