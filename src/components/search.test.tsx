import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchPage } from "./search/search.page";

describe("Application Page: Search Page", () => {
  it("should handle rendering the component.", () => {
    render(<SearchPage />);

    const search = screen.findByRole("textbox");
    expect(search).toBeInTheDocument;
  });
});
