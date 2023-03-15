import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  test("renders email and password fields", () => {
    render(<Login />);
    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  test("submits form with email and password", () => {
    const setAuth = jest.fn();
    render(<Login setAuth={setAuth} />);
    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    fireEvent.change(emailField, { target: { value: "test@test.com" } });
    fireEvent.change(passwordField, { target: { value: "password123" } });
    fireEvent.click(submitButton);
    expect(setAuth).toHaveBeenCalledWith(true);
  });

  test("displays error message if login fails", async () => {
    render(<Login />);
    const emailField = screen.getByLabelText(/email address/i);
    const passwordField = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    fireEvent.change(emailField, { target: { value: "wrongemail@test.com" } });
    fireEvent.change(passwordField, { target: { value: "wrongpassword" } });
    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText(/invalid email or password/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
