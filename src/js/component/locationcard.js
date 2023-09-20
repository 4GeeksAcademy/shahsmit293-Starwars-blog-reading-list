import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const LocationCard = ({ ...props }) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.fullname}</h5>
        <p className="card-text">Type:{props.type}</p>
        <p className="card-text">Dimension:{props.dimension}</p>
        <p className="card-text">Created:{props.create}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/readlocation/${props.find}`)}
          >
            Learn More!
          </button>
          <button
            className="btn"
            style={{
              backgroundColor: store.favoriteLists.includes(props.fullname)
                ? "red"
                : "yellow",
            }}
            onClick={() => actions.loadFavoritesLocation(props.addlocationid)}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

LocationCard.propTypes = {
  fullname: propTypes.string,
  type: propTypes.string,
  dimension: propTypes.string,
  create: propTypes.string,
  img: propTypes.string,
  find: propTypes.number,
  addlocationid: propTypes.number,
};
