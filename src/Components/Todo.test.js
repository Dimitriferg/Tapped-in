import React from "react";
import Todo from "./Todo";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import app, { mockFirebaseApp } from "../firebase";
import firebase from "firebase/compat/app";

const mockUpdate = jest.fn();
jest.mock("../firebase.js", () => {
  return jest.fn().mockImplementation(() => {
    return {
      get database() {
        return {
          ref: () => {
            return {
              child: () => {
                return {
                  update: mockUpdate,
                };
              },
            };
          },
        };
      },
    };
  });
});

jest.mock("firebase/compat/app", () => {
  return { auth: jest.fn() };
});

const mockTodoObj = {
  taskName: "Task",
  completed: false,
  id: 0,
};

test("Click", () => {
  const { container } = render(<Todo todo={mockTodoObj} />);
  const button = screen.getByTestId("complete");
  fireEvent.click(button);
});
