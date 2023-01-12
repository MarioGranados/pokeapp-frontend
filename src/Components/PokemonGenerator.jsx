import { POKEMON_API } from "../Services/Config";
import axios from "axios";
import { useState } from "react";
import { catchPokemon } from "../Services/PokemonServices";

const PokemonGenerator = () => {
  const [pokemon, setPokemon] = useState({
    appInfo: "",
  });
  const [pokeObj, setPokeObj] = useState({
    pokemon_name: "",
    pokemon_number: "",
    favorite: false,
    user_id: 1,
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let randomNumber = (Math.random() * 100).toFixed();
    const response = await axios
      .get(POKEMON_API + randomNumber.toString())
      .then((res) => {
        setPokemon({...pokemon, appInfo: res.data});
      })
      .then(console.log(pokemon));
  };

  const handleCatch = (e) => {
    e.preventDefault();
    //add pokemon id to database
    setPokeObj({
      pokedex_number: pokemon.appInfo.id,
      pokemon_name: pokemon.appInfo.name,
      user_id: 1,
      favorite: false,
    });
    console.log(pokeObj);
    // catchPokemon(pokeObj);
  };
  return (
    <>
      {pokemon.appInfo === "" ? (
        <button className="btn btn-primary" onClick={handleClick}>
          Fetch
        </button>
      ) : (
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.appInfo.id}.png`}
            class="card-img-top"
            alt={"sprite image of " + pokemon.appInfo.name}
          />
          <div class="card-body">
            <h5 class="card-title">{pokemon.appInfo.name}</h5>
            <p class="card-text">{pokemon.appInfo.description}</p>
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
