import React, { FunctionComponent } from "react";
import { Search } from "@trussworks/react-uswds";
import { Header } from "../../common";
import { useSearch } from "../../hooks";

export const SearchPage: FunctionComponent = () => {
  const { data, fetch, isLoading } = useSearch();

  return (
    <Header>
      <Search
        onSubmit={({ target }) => {
          console.log(target);
        }}
      />
    </Header>
  );
};
