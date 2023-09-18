import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard";
import { Context } from "../store/appContext";

import { LocationCard } from "../component/locationcard";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="main">
      <h1 style={{ color: "red", marginTop: "15px", marginBottom: "0px" }}>
        Characters Lists
      </h1>
      <div className="demo" style={{ display: "inline-flex" }}>
        {store.characters.map((element, index) => {
          return (
            <CharacterCard
              key={element.id}
              fullname={element.name}
              gender={element.gender}
              available={element.status}
              species={element.species}
              img={element.image}
              nav={element.id}
              addchar={element.id}
            />
          );
        })}
      </div>
      <h1 style={{ color: "red", marginTop: "15px", marginBottom: "0px" }}>
        Locations Lists
      </h1>
      <div className="demo2" style={{ display: "inline-flex" }}>
        {store.locations.map((element, index) => {
          return (
            <LocationCard
              key={element.id}
              fullname={element.name}
              type={element.type}
              dimension={element.dimension}
              create={element.create}
              img={store.photos[index]}
              nav={element.id}
              addloc={element.id}
            />
          );
        })}
      </div>
    </div>
  );
};
