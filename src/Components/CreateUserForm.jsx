import { useState } from "react";
import { createUser } from "../Services/UserServices";

const CreateUserForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (user.password === confirmPassword) {
      console.log("passwords match");

      createUser(user);
    } else {
      console.log("passwords don't match");
    }
    console.log(user);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2>Create User</h2>
      <form action="POST">
        <label htmlFor="username">username</label>
        <input
          type="text"
          onChange={handleChange}
          value={user.username}
          name="username"
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          onChange={handleChange}
          value={user.email}
          name="email"
        />
        <label htmlFor="dob">dob</label>
        <input
          type="text"
          onChange={handleChange}
          value={user.dob}
          name="dob"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          onChange={handleChange}
          value={user.password}
          name="password"
        />
        <label htmlFor="confirm">confirm password</label>
        <input
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button type="button" onClick={handleClick}>
          create user
        </button>
      </form>
    </>
  );
};
export default CreateUserForm;
