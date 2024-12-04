// App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Todo App", () => {
  test("renders the app without crashing", () => {
    render(<App />);
    // Check if the title is rendered
    expect(screen.getByText("TODO LIST")).toBeInTheDocument();
    // Check if the input box is rendered
    expect(screen.getByPlaceholderText("Add item . . .")).toBeInTheDocument();
    // Check if the Add button is rendered
    expect(screen.getByText("ADD")).toBeInTheDocument();
  });

  test("adds a new task when input is valid", () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Add item . . .");
    const addButton = screen.getByText("ADD");

    // Simulate typing a new task
    fireEvent.change(input, { target: { value: "Test Task" } });

    // Click the Add button
    fireEvent.click(addButton);

    // Check if the new task is added
    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  test("does not add an empty task", () => {
    render(<App />);
    const addButton = screen.getByText("ADD");

    fireEvent.click(addButton);

    // Log the DOM for debugging
    screen.debug();

    const listItems = screen.queryAllByRole("listitem");
    expect(listItems.length).toBe(0);
});


  

test("deletes a task when delete button is clicked", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("Add item . . .");
  const addButton = screen.getByText("ADD");

  // Add a new task
  fireEvent.change(input, { target: { value: "Task to be deleted" } });
  fireEvent.click(addButton);

  // Ensure the task is added
  expect(screen.getByText("Task to be deleted")).toBeInTheDocument();

  // Click the delete button
  const deleteButton = screen.getByText("Delete");
  fireEvent.click(deleteButton);

  // Check if the task was deleted
  expect(screen.queryByText("Task to be deleted")).not.toBeInTheDocument();
});
});
