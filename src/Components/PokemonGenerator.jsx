import { POKEMON_API } from "../Services/Config";
import axios from "axios";
import { useState } from "react";

const PokemonGenerator = () => {
  const [pokemon, setPokemon] = useState(null);

  const handleClick = (e) => {
    let randomNumber = (Math.random() * 100).toFixed();
    console.log(randomNumber);
    e.preventDefault();
    axios
      .get(POKEMON_API + randomNumber.toString())
      .then((res) => setPokemon({ appInfo: res.data }))
      .then(console.log(pokemon))
  };

  const handleRun = (e) => {
    e.preventDefault();
    setPokemon(null);
    handleClick(e);
  };

  const handleCatch = (e) => {
    e.preventDefault();
    //add pokemon id to database
  }
  return (
    <>
      {pokemon === null ? (
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
            <button className="btn btn-danger" onClick={handleRun}>Run</button>
            <button className="btn btn-secondary" onClick={handleCatch}>Catch</button>
          </div>
        </div>
      )}
    </>
  );
};
export default PokemonGenerator;
