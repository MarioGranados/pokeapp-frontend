import { useState } from "react";
import { getAllUsers, userLogin } from "../Services/UserServices";

const UserLogin = () => {

    const [username, setUsername] =useState('');
    const [password, setPassword] = useState('')

    const handleClick = (e) => {   
        console.log(username + " " + password);
        e.preventDefault();
        userLogin(username, password)
    }
    return(
        <>
        <h2>User Login</h2>
        <form action="get">
            <label htmlFor="username">username</label>
            <input type="text" onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="password">password</label>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Login</button>
        </form>
        </>
    )
}
export default UserLogin;