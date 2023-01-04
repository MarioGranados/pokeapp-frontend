export const createUser = (pokemon) => {
    fetch('http://localhost:8080/pokemon', {
        method: 'POST',
        headers: {"Content-Type": "application/JSON"},
        body: JSON.stringify(user)
    }).then(() => {
        console.log("user added")
    })
}