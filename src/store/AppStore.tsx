import React, { FC, useState, useEffect } from "react";
import { AppContext } from "./contexts";

export const AppStore: FC = ({ children }) => {
  const [appState, setAppState] = useState({});

  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
