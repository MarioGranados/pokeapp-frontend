import "./App.css";
import CreateUserForm from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import UserLogin from "./Components/UserLogin";
import PokemonGenerator from "./Components/PokemonGenerator";
import { getUserLogin } from "./Services/UserServices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <Router>
    
        <Navbar />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path='/' element={<Home/>}

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
