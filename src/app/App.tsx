import React, { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppStore } from "../store/AppStore";
import "./App.css";

import { SearchPage } from "../components/search/search.page";
import { Header } from "../common";
import { RequireAuth } from "../components/auth/require-auth.component";
import { LoginPage } from "../components/auth/login.page";
import { AuthStore } from "../store/AuthStore";

export const App: FunctionComponent = () => {
  return (
    <div className="App">
      <AppStore>
        <Header />
        <AuthStore>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <SearchPage />
                </RequireAuth>
              }
            />
            {/** Fallback Redirect / Default Page */}
            <Navigate to={"/"} />
          </Routes>
        </AuthStore>
      </AppStore>
    </div>
  );
};
