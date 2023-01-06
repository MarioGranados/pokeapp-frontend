import { USERS } from "./Config"
import axios from 'axios'


export const createUser = (user) => {
    axios.post(USERS, user)
    .then(res => console.log(res));
}

export const getUser = (id) => {
    axios.get(USERS + id);
}

export const userLogin = (username, password) => {

    fetch(`http://localhost:8080/users/findUser/${username}:${password}}`, {
        method: 'GET',
        headers: {"Content-Type": "application/JSON"},
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

export const getAllUsers = () => {
    axios.get(USERS)
    .then(res => console.log(res.data))

}