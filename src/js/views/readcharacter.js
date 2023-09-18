import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ReadCharacter = () => {
  const { store, actions } = useContext(Context);
  const { characterid } = useParams();

  useEffect(() => {
    actions.readCharacterData(characterid);
  }, []);

  return (
    <div className="main">
      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "row",
          color: "red",
          height: "600px",
        }}
      >
        <div className="photos">
          <img
            className="main-image"
            src={store.readCharacter.image}
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
          <h1>{store.readCharacter.name}</h1>
          <h3 style={{ overflowWrap: "break-word" }}>
            Former {store.readCharacter.name} Knight Ahsoka Tano once served as
            the Padawan learner to the {store.readCharacter.name} Anakin
            Skywalker during the Clone Wars. A respected leader and warrior
            attuned to the light side of the Force, Ahsoka grew into a
            formidable fighter before the Empire’s reign changed the course of
            galactic history. Although she walked away from the{" "}
            {store.readCharacter.name} Order, she continued to stand up for
            those fighting for peace and justice in the galaxy long after the
            fall of the Republic.
          </h3>
        </div>
      </div>
      <hr style={{ color: "black" }}></hr>
      <div
        className="footer"
        style={{
          display: "flex",
          margin: "25px",
          padding: "15px",
          justifyContent: "space-evenly",
          color: "red",
        }}
      >
        <div>
          <h3>Name:</h3>
          <h5>{store.readCharacter.name}</h5>
        </div>
        <div>
          <h3>Status:</h3>
          <h5>{store.readCharacter.status}</h5>
        </div>
        <div>
          <h3>Species:</h3>
          <h5>{store.readCharacter.species}</h5>
        </div>
        <div>
          <h3>Gender:</h3>
          <h5>{store.readCharacter.gender}</h5>
        </div>
        <div>
          <h3>Created:</h3>
          <h5>{store.readCharacter.created}</h5>
        </div>
      </div>
    </div>
  );
};
