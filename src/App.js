import { useEffect } from "react";
import "./App.css";
import CreatePokemonForm from "./Components/CreatePokemonForm";
import CreateUserForm from "./Components/CreateUserForm";
import UserLogin from "./Components/UserLogin";
import { getAllUsers } from "./Services/UserServices";
function App() {

  return (
    <>
      <UserLogin />
      <CreateUserForm/>
      <CreatePokemonForm />
      <button onClick={(e) => {
        e.preventDefault();
        getAllUsers();
      }}>get all users</button>
    </>
  );
}

export default App;
