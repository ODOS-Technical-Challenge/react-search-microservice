import { FunctionComponent } from "react";
import { Routes } from "react-router-dom";
import { AppStore } from "../store/AppStore";
import "./App.css";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <header className="App-header"></header>
        <Routes></Routes>
      </AppStore>
    </div>
  );
};
