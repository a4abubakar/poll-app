import { render, screen, fireEvent } from "@testing-library/react";
import Summary from "./Summary";

describe("Summary", () => {
    const answers = ["Good", "Food", "Very Productive", "Learning"];
    const mockOnSubmit = jest.fn();

    it("renders the summary correctly", () => {
        render(<Summary answers={answers} onSubmit={mockOnSubmit} />);
        expect(screen.getByText("Summary")).toBeInTheDocument();
        expect(screen.getByText("Question 1: Good")).toBeInTheDocument();
        expect(screen.getByText("Question 2: Food")).toBeInTheDocument();
        expect(screen.getByText("Question 3: Very Productive")).toBeInTheDocument();
        expect(screen.getByText("Question 4: Learning")).toBeInTheDocument();
    });

    it("calls onSubmit when submit button is clicked", () => {
        render(<Summary answers={answers} onSubmit={mockOnSubmit} />);
        fireEvent.click(screen.getByText("Submit"));
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
});
