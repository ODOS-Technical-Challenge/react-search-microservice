import React, { FunctionComponent } from "react";
import { Routes } from "react-router-dom";
import { AppStore } from "../store/AppStore";
import "./App.css";

import { SearchPage } from "../components/search/search.page";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Routes></Routes>
        <SearchPage />
      </AppStore>
    </div>
  );
};
