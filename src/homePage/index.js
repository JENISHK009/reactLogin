import React from "react";

const HomePage = ({ setLocalStorage }) => {
  return (
    <div>
      <h1>Wlcome</h1>
      <button
        onClick={() => {
          setLocalStorage({});
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default {
  HomePage,
};
