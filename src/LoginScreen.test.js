import React from "react";
import LoginScreen from "./LoginScreen";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import app, { mockFirebaseApp } from "./firebase";
import firebase from "firebase/compat/app";

jest.mock("./firebase.js", () => {
  return jest.fn().mockImplementation(() => {
    return {};
  });
});

jest.mock("firebase/compat/app", () => {
  return { auth: jest.fn() };
});

test("renders a message", () => {
  firebase.auth.mockReturnValueOnce({
    onAuthStateChanged: (callback) =>
      callback({ email: "example@gmail.com", uid: 1, emailVerified: true }),
  });

  const { container, getByLabelText } = render(<LoginScreen />);
  expect(screen.getByText("WELCOME TO TAPPED IN")).toBeInTheDocument();
});
