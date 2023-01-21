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
import Profile from "./Pages/Profile";
import Game from './Pages/Game'
function App() {
  return (
    <div className="bg-light">
      <Router>
    
        <Navbar />
        <Routes>
          <Route path="/login" element={<UserLogin />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/adventure' element={<Game/>} />
          <Route path='/profile' element={<Profile/>}/>
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
