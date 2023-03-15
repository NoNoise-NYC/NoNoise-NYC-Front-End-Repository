import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Signup from "./Signup";

describe("Signup", () => {
  test("renders signup form with required fields", () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    const usernameField = screen.getByLabelText("username");
    const emailField = screen.getByLabelText("Email Address");
    const passwordField = screen.getByLabelText("Password");
    const signupButton = screen.getByRole("button", { name: "Sign Up" });

    expect(usernameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();
  });

  test("submitting signup form calls handleSignup function", () => {
    const mockHandleSignup = jest.fn();

    render(
      <MemoryRouter>
        <Signup handleSignup={mockHandleSignup} />
      </MemoryRouter>
    );

    const usernameField = screen.getByLabelText("username");
    const emailField = screen.getByLabelText("Email Address");
    const passwordField = screen.getByLabelText("Password");
    const signupButton = screen.getByRole("button", { name: "Sign Up" });

    fireEvent.change(usernameField, { target: { value: "testuser" } });
    fireEvent.change(emailField, { target: { value: "testuser@example.com" } });
    fireEvent.change(passwordField, { target: { value: "password" } });
    fireEvent.click(signupButton);

    expect(mockHandleSignup).toHaveBeenCalledTimes(1);
  });
});
