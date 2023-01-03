import "./App.css";
import CreatePokemonForm from "./Components/CreatePokemonForm";
import CreateUserForm from "./Components/CreateUserForm";
import UserLogin from "./Components/UserLogin";
function App() {

  return (
    <>
      <UserLogin />
      <CreateUserForm />
      <CreatePokemonForm />
    </>
  );
}

export default App;
