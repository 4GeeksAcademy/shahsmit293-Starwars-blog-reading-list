import React, { useContext } from "react";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactercard";
import { Context } from "../store/appContext";

import { LocationCard } from "../component/locationcard";
import { SearchBar } from "../component/searchbar";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="details">
      <SearchBar />
      <h1
        style={{
          color: "red",
          marginTop: "15px",
          marginBottom: "0px",
          marginLeft: "10px",
        }}
      >
        Characters
      </h1>
      <div className="row d-flex flex-nowrap overflow-auto">
        {store.characters.map((element, index) => {
          return (
            <CharacterCard
              key={element.id}
              fullname={element.name}
              gender={element.gender}
              available={element.status}
              species={element.species}
              img={element.image}
              find={element.id}
              addcharacterid={element.id}
            />
          );
        })}
      </div>
      <h1
        style={{
          color: "red",
          marginTop: "15px",
          marginBottom: "0px",
          marginLeft: "10px",
        }}
      >
        Locations
      </h1>
      <div className="location-lists row d-flex flex-nowrap overflow-auto">
        {store.locations.map((element, index) => {
          return (
            <LocationCard
              key={element.id}
              fullname={element.name}
              type={element.type}
              dimension={element.dimension}
              create={element.create}
              img={store.photos[index]}
              find={element.id}
              addlocationid={element.id}
            />
          );
        })}
      </div>
    </div>
  );
};
