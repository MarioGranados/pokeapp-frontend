
import "./App.css";
import CreatePokemonForm from "./Components/CreatePokemonForm";
import CreateUserForm from "./Components/CreateUserForm";
import PokemonGenerator from "./Components/PokemonGenerator";
import { getUserLogin } from "./Services/UserServices";

function App() {

  return (
    <>
      <CreateUserForm/>
      <CreatePokemonForm />
      <button onClick={(e) => {
        e.preventDefault();
        getUserLogin()

      }}>get all users</button>
      <PokemonGenerator/>
    </>
  );
}

export default App;
