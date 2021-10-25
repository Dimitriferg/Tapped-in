import React from "react";
import Title from "./Title";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

test("renders a message", () => {
  const { container, getByText } = render(<Title />);
  expect(getByText("ToDo List")).toBeInTheDocument();
  expect(screen.getByText("ToDo List")).toBeInTheDocument();
});
