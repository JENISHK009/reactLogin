import loginPage from "./loginPage/index";
import React, { useState, useEffect } from "react";
import registration from "./registration/index";
import homePage from "./homePage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  let [user, setLoginUser] = useState({});

  useEffect(() => {
    setLoginUser(JSON.parse(sessionStorage.getItem("currentUser")));
  }, [sessionStorage.getItem("currentUser")]);

  let setLocalStorage = (currentUser) => {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

    setLoginUser(currentUser);
  };
  return (
    <div className="loginPage">
      <Router>
        <Routes>
          <Route
            exact
            path="/login"
            element={<loginPage.Login setLocalStorage={setLocalStorage} />}
          ></Route>
          <Route
            exact
            path="/"
            element={
              user && user.token ? (
                <homePage.HomePage setLocalStorage={setLocalStorage} />
              ) : (
                <loginPage.Login setLocalStorage={setLocalStorage} />
              )
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={<registration.Registration />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
