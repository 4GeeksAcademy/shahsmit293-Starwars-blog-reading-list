import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/card.css";
import propTypes from "prop-types";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const CharacterCard = ({ ...props }) => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.fullname}</h5>
        <p className="card-text">Gender:{props.gender}</p>
        <p className="card-text">Status:{props.available}</p>
        <p className="card-text">Species:{props.species}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate(`/readcharacter/${props.find}`)}
            className="btn btn-primary"
          >
            Learn More!
          </button>
          <button
            className="btn btn-warning"
            onClick={() => actions.loadFavoriteCharacter(props.addcharacterid)}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  fullname: propTypes.string,
  gender: propTypes.string,
  available: propTypes.string,
  species: propTypes.string,
  img: propTypes.string,
  find: propTypes.number,
  addcharacterid: propTypes.number,
};
