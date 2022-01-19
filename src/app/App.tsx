import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store/AppStore";
import "./App.css";

import { SearchPage } from "../components/search/search.page";
import { Header } from "../common";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />

          {/** Fallback Redirect / Default Page */}
          <Navigate to={"/"} />
        </Routes>
      </AppStore>
    </div>
  );
};
