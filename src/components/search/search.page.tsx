import React, { FunctionComponent } from "react";
import { Search } from "@trussworks/react-uswds";
import { useSearch } from "../../hooks";

export const SearchPage: FunctionComponent = () => {
  const { data, fetch, isLoading } = useSearch();

  return (
    <div
      style={{
        height: "4rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div style={{ margin: "16px" }}>logo</div>
      <Search
        onSubmit={({ target }) => {
          console.log(target);
        }}
      />
    </div>
  );
};
