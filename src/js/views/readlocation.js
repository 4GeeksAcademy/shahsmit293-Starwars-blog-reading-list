import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ReadLocation = () => {
  const { store, actions } = useContext(Context);
  const { id2 } = useParams();
  useEffect(() => {
    actions.readLocationData(id2);
  }, []);
  return (
    <div className="main">
      <div className="body" style={{ display: "flex", flexDirection: "row" }}>
        <div className="photo">
          <img
            className="main-image"
            src={store.photos[id2]}
            alt="Card image cap"
            style={{ width: "600px", height: "400px", margin: "25px" }}
          />
        </div>
        <div
          className="text"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            margin: "25px",
          }}
        >
          <h1>{store.readlocation.name}</h1>
          <h3 style={{ overflowWrap: "break-word" }}>
            Former {store.readlocation.name} Knight Ahsoka Tano once served as
            the Padawan learner to the {store.readlocation.name} Anakin
            Skywalker during the Clone Wars. A respected leader and warrior
            attuned to the light side of the Force, Ahsoka grew into a
            formidable fighter before the Empire’s reign changed the course of
            galactic history. Although she walked away from the{" "}
            {store.readlocation.name} Order, she continued to stand up for those
            fighting for peace and justice in the galaxy long after the fall of
            the Republic.
          </h3>
        </div>
      </div>
      <hr></hr>
      <div
        className="footer"
        style={{
          display: "flex",
          margin: "25px",
          padding: "15px",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h3>Name:</h3>
          <h5>{store.readlocation.name}</h5>
        </div>
        <div>
          <h3>Type:</h3>
          <h5>{store.readlocation.type}</h5>
        </div>
        <div>
          <h3>Dimension:</h3>
          <h5>{store.readlocation.dimension}</h5>
        </div>
        <div>
          <h3>Created:</h3>
          <h5>{store.readlocation.created}</h5>
        </div>
      </div>
    </div>
  );
};
