import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setLocalStorage }) => {
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

  const loginApi = () => {
    try {
      let { email, password } = user;
      if (!email || !password) throw new Error("Please fill all details");
      axios
        .post("http://localhost:3005/api/v1/users/login", user)
        .then((res) => {
          alert(res.data.message);
          setLocalStorage({ token: res.data.token });
          navigate("/");
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    } catch (error) {
      alert(error.message);
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form1">
        <h1>Login Here</h1>
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
        <button className="buttonLogin" onClick={loginApi}>
          Log In
        </button>
        <div className="or">Or</div>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default { Login };
