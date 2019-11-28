import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SF from "./components/Snowflake";

const App: React.FC = () => {
  return (
    <div className="app-bcg">
      <SF size={100} />
    </div>
  );
};

export default App;
