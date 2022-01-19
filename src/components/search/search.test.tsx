import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "./search.page";
import { BrowserRouter } from "react-router-dom";

describe("Application Page: Search Page", () => {
  it("should handle rendering the component.", () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search = screen.findByRole("textbox");
    expect(search).toBeInTheDocument;
  });

  it("should handle search functionality.", async () => {
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    );

    const search: HTMLInputElement = await screen.findByRole("textbox");
    fireEvent.change(search, "jane");

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(search).toBeInTheDocument;
    expect(button).toBeInTheDocument;
  });
});
