import { useState } from "react";
import { getAllUsers, getUserLogin } from "../Services/UserServices";
import {Link} from 'react-router-dom'

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = (e) => {
    console.log(username + " " + password);
    e.preventDefault();
    setUser(getUserLogin(username, password));
    localStorage.setItem('user', user);

  };
  return (
    <div className="container m-auto w-50 mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Login</h4>
          <form action="get">
            <label htmlFor="username">username</label>
            <input type="text" className="form-control mb-3" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">password</label>
            <input
              type="password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary my-2" onClick={handleClick}>Login</button>
            <p className="text-lead">Don't have an account? Sign Up <span><Link to='/signup'>Here</Link></span></p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
