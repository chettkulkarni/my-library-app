import React from "react";
import { render } from "@testing-library/react";
import Requests from "../components/Requests";
import { BrowserRouter } from "react-router-dom";

jest.mock("firebase", () => ({
  auth: () => {
    return { onAuthStateChanged: val => true };
  }
}));
test("Snapshot for Requests", () => {
  const { container } = render(
    <BrowserRouter>
      <Requests />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
  console.log(6);
});
