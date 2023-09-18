import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-black m-5 mt-0">
      <Link to="/">
        <button className="navbar-brand mb-0 h1">star wars</button>
      </Link>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ display: "flex" }}
        >
          Favorites
          <h5
            style={{ marginLeft: "10px", background: "white", color: "black" }}
          >
            {store.favoritelists.length}
          </h5>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favoritelists.map((e, index) => {
            return (
              <li key={index} style={{ display: "flex" }}>
                <a className="dropdown-item" href="#">
                  {e}
                </a>
                <button
                  key={index}
                  onClick={() => actions.deleteFavorite(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
