import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const { store, actions } = useContext(Context);
  const [value, setvalue] = useState("");
  const navigate = useNavigate();
  return (
    <form className="form m-0 p-0">
      <div
        className="search"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <input
          className="form-control mr-sm-2"
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
        {store.characters
          .filter((item) => {
            const fullname = item.name.toLowerCase();
            const searchTerm = value.toLowerCase();
            return searchTerm && fullname !== searchTerm;
          })
          .map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setvalue(item.name);
                  actions.searchNames(item.name);
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
