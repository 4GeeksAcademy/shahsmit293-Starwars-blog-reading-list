import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-white m-5 mt-0 justify-content-between">
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
            {store.favoriteLists.length}
          </h5>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {store.favoriteLists.map((e, index) => {
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
