import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store/AppStore";
import { Header } from "../common";
import { ROUTES } from "../utils";

import "./App.css";

import { SearchPage } from "../components";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <Routes>
          <Route {...ROUTES.Home} element={<SearchPage />} />

          {/** Fallback Redirect / Default Page */}
          <Route path="" element={<Navigate to={ROUTES.Home.path} />} />
        </Routes>
      </AppStore>
    </div>
  );
};
