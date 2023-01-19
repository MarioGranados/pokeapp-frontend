import { POKEMON_API } from "../Services/Config";
import axios from "axios";
import { catchPokemon } from "../Services/PokemonServices";
import { useEffect, useState } from "react";

const PokemonGenerator = () => {
  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState({
    pokemon_name: "",
    pokemon_number: "",
    favorite: false,
    user_id: 1,
  });
  const [click, setClick] = useState(false);

  async function apiFetchRequest() {
    let randomNumber = Math.floor(Math.random() * 100);
    const results = await axios.get(POKEMON_API + randomNumber.toString());
    const json = results.data;
    setData({ api: json });
    setPokemon({
      pokedexNumber: json.id,
      pokemonName: json.name,
      user: 1,
    });
  }

  const handleClick = () => {
    apiFetchRequest()

  };

  const handleCatch = (e) => {
    e.preventDefault();
    //add pokemon id to database
    console.log(pokemon);
    catchPokemon(pokemon);
  };
  return (
    <>
      {data === null ? (
        <button className="btn btn-primary" onClick={handleClick}>
          Fetch
        </button>
      ) : (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.api.id}.png`}
            className="card-img-top"
            alt={"sprite image of " + data.api.name}
          />
          <div className="card-body">
            <h5 className="card-title">{data.api.name}</h5>
            <p className="card-text">{data.api.description}</p>
            <button className="btn btn-danger" onClick={handleClick}>
              Run
            </button>
            <button className="btn btn-secondary" onClick={handleCatch}>
              Catch
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default PokemonGenerator;
