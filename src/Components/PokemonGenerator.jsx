import { POKEMON_API } from "../Services/Config";
import axios from "axios";
import { catchPokemon } from "../Services/PokemonServices";
import { useEffect, useState } from "react";
import Pokeball from "./Pokeball";

const PokemonGenerator = () => {
  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState({
    pokemon_name: "",
    pokemon_number: "",
    favorite: false,
    user_id: 1,
  });
  function createRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }

  async function apiFetchRequest() {
    let randomNumber = createRandomNumber(100)
    const results = await axios.get(POKEMON_API + randomNumber.toString());
    const json = results.data;
    setData({ api: json });
    console.log(json);
    setPokemon({
      pokedexNumber: json.id,
      pokemonName: json.name,
      favorite: false,
    });
  }
  const handleClick = () => {
    apiFetchRequest();
  };
  const handleCatch = (e) => {
    e.preventDefault();
    //add pokemon id to database
    console.log(pokemon);
    catchPokemon(pokemon);
  };
  return (
    <div className="container mt-5">
      {data === null ? (
        <>
        <p className="text-lead text-center">
          Click On The Pokeball To Start
        </p>
        <div onClick={handleClick} className='d-flex justify-content-center'>
          <Pokeball />
        </div>
        </>
      ) : (
        <div className="justify-content-center d-flex">
          <div className="card" style={{ width: "22rem" }}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.api.id}.png`}
              className="card-img-top"
              alt={"sprite image of " + data.api.name}
            />
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                {data.api.flavor_text_entries[0].flavor_text}
              </h5>
              <p className="card-text">{data.api.name}</p>
              <div className="d-flex justify-content-around">
                <button className="btn btn-danger" onClick={handleClick}>
                  Run
                </button>
                <button className="btn btn-secondary" onClick={handleCatch}>
                  Catch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PokemonGenerator;
