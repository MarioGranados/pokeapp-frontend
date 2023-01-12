import axios from "axios";
import {POKEMON_URL } from "./Config";
export const catchPokemon = (pokemon) => {
  axios.post(POKEMON_URL, pokemon)
  .then((res) => console.log(res));
};
