export const createUser = (user) => {
    fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify(user)
    }).then(() => {
        console.log("user added")
    })
}

export const getUser = (id) => {
    fetch('http://localhost:8080/users' + id, {
        method: 'GET',
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify()
    }).then(() => {
        console.log("user added")
    })
}

export const userLogin = (username, password) => {
    fetch('http://localhost:8080/users/findUser' + username + "+" + password)
    .then(response => response.json())
    .then(json => console.log(json))
}

export const getAllUsers = () => {
    fetch('http://localhost:8080/users', {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then(response => response.json())
    .then(json => console.log(json))

}