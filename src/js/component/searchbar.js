import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
  const mixData = [...store.characters, ...store.locations]; // combine array  of characters and locations properties
  return (
    <form className="form m-4 p-0">
      <div
        className="search"
        style={{ display: "inline-flex", justifyItems: "center" }}
      >
        <input
          className="form-control mr-sm-2"
          autoComplete="on"
          type="text"
          value={value}
          onChange={(e) => setvalue(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          onClick={() =>
            navigate(
              `/read${store.onlyNames[0].category}/${store.onlyNames[0].id}`
            )
          }
        >
          Search
        </button>
      </div>
      <div className="dropdown">
        {mixData
          .filter((item) => {
            const itemName = item.name.toLowerCase();
            const term = value.toLowerCase();
            return term && itemName.startsWith(term) && itemName !== term;
          })
          .map((item, index) => {
            return (
              <div
                style={{
                  cursor: "pointer",
                  borderBottom: "2px solid",
                  backgroundColor: "GhostWhite",
                  display: "inline-flex",
                }}
                key={index}
                onClick={() => {
                  setvalue(item.name);
                  actions.searchNames(item.name, mixData);
                }}
                className="dropdown-row"
              >
                {item.name}
              </div>
            );
          })}
      </div>
    </form>
  );
};
