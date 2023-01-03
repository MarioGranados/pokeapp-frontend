const CreateUserForm = () => {
    return(
        <>
        <h2>Create User</h2>
        <form action="POST">
            <label htmlFor="username">username</label>
            <input type="text" />
            <label htmlFor="email">email</label>
            <input type="text" />
            <label htmlFor="dob">dob</label>
            <input type="text" />
            <label htmlFor="password">password</label>
            <input type="password" />
            <label htmlFor="confirm">confirm password</label>
            <input type="password" />
            <input type="button" value="submit" />
        </form>
        </>
    )
}
export default CreateUserForm;