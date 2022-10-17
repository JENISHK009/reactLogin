import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onchange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const loginApi = () => {
    axios
      .post("http://localhost:3005/api/v1/users/signup", user)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <div>
      <div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
        <h1>Registration Here</h1>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          className="NameInput"
          name="name"
          value={user.name}
          onChange={onchange}
        ></input>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Email"
          className="emailInput"
          name="email"
          value={user.email}
          onChange={onchange}
        ></input>
        <label>Password</label>
        <input
          type="text"
          placeholder="Enter your password"
          className="passwordInput"
          name="password"
          value={user.password}
          onChange={onchange}
        ></input>
        <button className="buttonSignup" onClick={loginApi}>
          Sign Up
        </button>
        <div className="or">Or</div>
        <button
          className="buttonLogin"
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default { Registration };
