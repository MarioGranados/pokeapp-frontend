import { POKEMON_API } from "../Services/Config";
import axios from 'axios'

const PokemonGenerator = () => {
    const handleClick = (e) => {
        e.preventDefault();
        axios.get(POKEMON_API + 'pokemon/1' ).then(res => {console.log(res.data)})

    }
    return(
        <>
        <button className="btn btn-primary" onClick={handleClick}>Fetch</button>
        </>
    )
}
export default PokemonGenerator;