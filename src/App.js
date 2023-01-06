
import "./App.css";
import CreatePokemonForm from "./Components/CreatePokemonForm";
import CreateUserForm from "./Components/CreateUserForm";
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
    </>
  );
}

export default App;
