import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load Contact component with user details and a form", () => {
    render(<Contact
    />);

    const nameHeading = screen.getByText(/Name:/i);
    expect(nameHeading).toBeInTheDocument();
    
});
test("Should load button inside the component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

});
