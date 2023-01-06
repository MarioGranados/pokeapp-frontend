import { USERS } from "./Config"
import axios from 'axios'


export const createUser = (user) => {
    axios.post(USERS, user)
    .then(res => console.log(res));
}

export const getUser = (id) => {
    axios.get(USERS + id);
}

export const getUserLogin = (user, pass) => {
    
    axios.get(USERS + '/login', {
        params: {
            username: "test",
            password: "test"
        }
    }).then(res => console.log(res))
}



export const getAllUsers = () => {
    axios.get(USERS)
    .then(res => console.log(res.data))

}