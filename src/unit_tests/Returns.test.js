import React from "react";
import { render } from "@testing-library/react";
import Returns from "../components/Returns";
import { BrowserRouter } from "react-router-dom";

jest.mock("firebase", () => ({
  auth: () => {
    return { onAuthStateChanged: val => true };
  }
}));
test("Snapshot for Returns", () => {
  const { container } = render(
    <BrowserRouter>
      <Returns />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
  console.log(6);
});
