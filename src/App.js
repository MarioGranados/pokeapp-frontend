import "./App.css";
import CreateUserForm from "./Pages/SignUp";
import Navbar from "./Components/Navbar";
import UserLogin from "./Pages/UserLogin";
import PokemonGenerator from "./Components/PokemonGenerator";
import { getUserLogin } from "./Services/UserServices";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Router>
    
        <Navbar />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path='/' element={<Home/>}/>

          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
