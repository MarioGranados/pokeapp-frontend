import { POKEMON_API } from "../Services/Config";
import axios from "axios";
import { catchPokemon } from "../Services/PokemonServices";
import { useState } from "react";

const PokemonGenerator = () => {
  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState({
    pokemon_name: "",
    pokemon_number: "",
    favorite: false,
    user_id: 1,
  });

  const handleClick = (e) => {
    e.preventDefault();
    let randomNumber = (Math.random() * 100).toFixed();
    axios
      .get(POKEMON_API + randomNumber.toString())
      .then((res) => {
        setData([res.data])
      })
      .then(console.log(data));
  };

  const handleCatch = (e) => {
    e.preventDefault();
    //add pokemon id to database
    setPokemon({
      pokedex_number: data.appInfo.id,
      pokemon_name: data.appInfo.name,
      user_id: 1,
      favorite: false,
    });
    console.log(pokemon);
    // catchPokemon(pokeObj);
  };
  return (
    <>
      {data.length === 0 ? (
        <button className="btn btn-primary" onClick={handleClick}>
          Fetch
        </button>
      ) : (
        <div class="card" style={{ width: "18rem" }}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.appInfo.id}.png`}
            class="card-img-top"
            alt={"sprite image of " + data.appInfo.name}
          />
          <div class="card-body">
            <h5 class="card-title">{data.appInfo.name}</h5>
            <p class="card-text">{data.appInfo.description}</p>
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
