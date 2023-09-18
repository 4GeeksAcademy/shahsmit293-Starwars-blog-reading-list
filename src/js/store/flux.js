const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      characters: [],
      locations: [],
      readchar: {},
      readlocation: {},
      photos: [],
      favoritelists: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

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
            setStore({ characters: data });
          });
      },

      loadFavoritesChar: (j) => {
        const store = getStore();
        fetch(`https://rickandmortyapi.com/api/character/${j}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const favoritelists = store.favoritelists;
            favoritelists.push(data.name);
            setStore({ favoritelists: favoritelists });
          });
      },

      loadFavoritesLocation: (j) => {
        const store = getStore();
        fetch(`https://rickandmortyapi.com/api/location/${j}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            const favoritelists = store.favoritelists;
            favoritelists.push(data.name);
            setStore({ favoritelists: favoritelists });
          });
      },

      deleteFavorite: (d) => {
        const store = getStore();
        const updatefavorite = store.favoritelists.filter(
          (element, index) => index != d
        );
        setStore({ favoritelists: updatefavorite });
      },

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

      loadLocationData: () => {
        fetch("https://rickandmortyapi.com/api/location/[1,2,3,4,5,6,7,8,9,10]")
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setStore({ locations: data });
          });
      },

      readCharacterData: (i) => {
        fetch(`https://rickandmortyapi.com/api/character/${i}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setStore({ readchar: data });
          });
      },

      readLocationData: (i) => {
        fetch(`https://rickandmortyapi.com/api/location/${i}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setStore({ readlocation: data });
          });
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
