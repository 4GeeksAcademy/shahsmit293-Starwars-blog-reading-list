const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [], // Array of objects of characters
      locations: [], // Array of objects of locations
      readCharacter: {}, //Object for single charater for reading
      readLocation: {}, //Object for single location for reading
      photos: [], //All photos form characters
      favoriteLists: [], // Array of character and location name whihc favorited
      onlyNames: undefined, //Array of names of charaters or locations
    },

    actions: {
      // This function for load all character data from API
      loadCharacterData: () => {
        fetch(
          "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]"
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            data.map((item) => {
              item.category = "character";
            });
            setStore({ characters: data });
          });
      },

      //This function use for adding character which choose as a favorite
      loadFavoriteCharacter: (j) => {
        const store = getStore();
        fetch(`https://rickandmortyapi.com/api/character/${j}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const favoriteLists = store.favoriteLists;
            if (favoriteLists.includes(data.name) === false) {
              favoriteLists.push(data.name);
            }

            setStore({ favoriteLists: favoriteLists });
          });
      },

      //This function use for adding loaction which choose as a favorite
      loadFavoritesLocation: (j) => {
        const store = getStore();
        fetch(`https://rickandmortyapi.com/api/location/${j}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const favoriteLists = store.favoriteLists;
            favoriteLists.push(data.name);
            setStore({ favoriteLists: favoriteLists });
          });
      },

      // This function use to delete particular name from list of favorites
      deleteFavorite: (d) => {
        const store = getStore();
        const updatefavorite = store.favoriteLists.filter(
          (element, index) => index != d
        );
        setStore({ favoriteLists: updatefavorite });
      },

      //This function use to get all images from charater api
      loadImageData: () => {
        fetch(
          "https://rickandmortyapi.com/api/character/[11,12,13,14,15,16,17,18,19,20]"
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const images = data.map((set, index) => {
              return set.image;
            });
            setStore({ photos: images });
          });
      },

      // This function for load all locations data from API
      loadLocationData: () => {
        fetch("https://rickandmortyapi.com/api/location/[1,2,3,4,5,6,7,8,9,10]")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            data.map((item) => {
              item.category = "location";
            });
            setStore({ locations: data });
          });
      },

      //This function use to get single character from api
      readCharacterData: (i) => {
        fetch(`https://rickandmortyapi.com/api/character/${i}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setStore({ readCharacter: data });
          });
      },

      //This function use to get single location from api
      readLocationData: (i) => {
        fetch(`https://rickandmortyapi.com/api/location/${i}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setStore({ readLocation: data });
          });
      },

      //This function use to find names in searchbar
      searchNames: (input, temp) => {
        var result = temp.filter((obj) => {
          return obj.name === input;
        });
        setStore({ onlyNames: result });
      },
    },
  };
};

export default getState;
