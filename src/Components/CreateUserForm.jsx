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
      <div className="card">
        <div className="card-body m-auto w-50">
          <h2>Create User</h2>
          <form action="POST">
            <div class="mb-3">
              <label htmlFor="username">username</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={user.username}
                name="username"
                placeholder="username"
                id="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">email</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={user.email}
                name="email"
                placeholder="email"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dob">dob</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={user.dob}
                name="dob"
                placeholder="dob"
                id="form-floating"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange}
                value={user.password}
                name="password"
                placeholder="password"
                id="password"
              />
            </div>
            <div className="mb-3">
            <label htmlFor="confirm">confirm password</label>
              <input
                className="form-control"
                type="password"
                placeholder="confirm"
                id="confirm"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />{" "}
            </div>

            <button type="button" className="btn btn-primary" onClick={handleClick}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateUserForm;
