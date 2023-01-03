const UserLogin = () => {
    return(
        <>
        <h2>User Login</h2>
        <form action="get">
            <label htmlFor="username">username</label>
            <input type="text" />
            <label htmlFor="password">password</label>
            <input type="password" />
            <input type="button" value="submit" />
        </form>
        </>
    )
}
export default UserLogin;