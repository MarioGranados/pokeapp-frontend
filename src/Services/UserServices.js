import { USERS_URL } from "./Config"
import axios from 'axios'

//GET
export const createUser = (user) => {
    axios.post('http://localhost:8080/sign-up', `${user}`)
    .then(res => console.log(res));
}

export const getUser = (id) => {
    axios.get(USERS_URL + `/${id}`);
}

export const getUserLogin = (user, pass) => {
    
    axios.get(USERS_URL + '/login', {
        params: {
            username: "test",
            password: "test"
        }
    }).then(res => {return res})
}


export const getAllUsers = () => {
    axios.get(USERS_URL)
    .then(res => console.log(res.data))

}