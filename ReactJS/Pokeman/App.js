/**
 * WAP to load pokeman from api as a dropdown. If you select any of the item it trigger another api which list pokeman
 * images as card. If you are selecting any option which you previously selected don't trigger api to that details again instead store the 
 * response somewhere else and fetch that from there.
 * For eg; first api call gives you list of pokemon options. You choose option D, which calls the api for images, it gives a set of images. You store it somewhere. Then 
 * next you are selecting option A and it also gives you a set of images. Now you are again selecting option D. Since it is not a first selection
 * don't trigger the api to get its images instead fetch from the saved list.
 */

import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [details, setDetails] = useState([]);
  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  const getData = async function (url) {
    const resp = await fetch(url);
    const json = await resp.json();
    setPokemon(json.results);
  };

  const getDetails = async (url, name) => {
    if (localStorage.getItem(name)) {
      setDetails(JSON.parse(localStorage.getItem(name)));
    } else {
      await triggerApi(url);
    }
  };

  const triggerApi = async function (url) {
    let resp = await fetch(url);
    let json = await resp.json();
    setDetails(json);
    localStorage.setItem(json.name, JSON.stringify(json));
  };
  useEffect(() => {
    getData(API_URL);
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <select
        onChange={(e) => {
          getDetails(e.target.value, e.target.selectedOptions[0].dataset.name);
        }}
      >
        {pokemon &&
          pokemon.map((item) => (
            <option
              class="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabindex="-1"
              key={item.name}
              value={item.url}
              data-name={item.name}
            >
              {item.name}
            </option>
          ))}
      </select>
      <div className="grid grid-cols-4">
        {details &&
          details?.sprites &&
          Object.entries(details?.sprites).map(([key, val]) => (
            <>
              {val && (
                <div className="col-span-1">
                  <img src={val} alt="" />
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
