import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
describe("Navbar Component", () => {
  it("renders without errors", () => {
    const { getByAltText, getByTestId } = render(<Navbar />);
    // Ensure the logo is rendered
    const logo = getByAltText("NEZA LOGO");
    expect(logo).toBeInTheDocument();
    // Ensure the menu icon is rendered
    const menuIcon = getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
    // Ensure the navigation links are not initially visible
    const navbarLinks = getByTestId("navbar-links");
    expect(navbarLinks).toHaveClass("navbar-links");
    expect(navbarLinks).not.toHaveClass("show");
  });
  it("toggles the menu when the menu icon is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const menuIcon = getByTestId("menu-icon");
    const navbarLinks = getByTestId("navbar-links");
    // Click the menu icon to show the links
    fireEvent.click(menuIcon);
    expect(navbarLinks).toHaveClass("show");
    // Click the menu icon again to hide the links
    fireEvent.click(menuIcon);
    expect(navbarLinks).not.toHaveClass("show");
  });
});