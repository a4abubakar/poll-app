import { render, screen, fireEvent } from "@testing-library/react";
import Option from "./Option";

describe("Option", () => {
    const mockOnSelect = jest.fn();

    it("renders the icon and label correctly", () => {
        render(<Option icon="👍" label="Good" onSelect={mockOnSelect} />);
        expect(screen.getByText("👍")).toBeInTheDocument();
        expect(screen.getByText("Good")).toBeInTheDocument();
    });

    it("calls onSelect when clicked", () => {
        render(<Option icon="👍" label="Good" onSelect={mockOnSelect} />);
        fireEvent.click(screen.getByText("Good"));
        expect(mockOnSelect).toHaveBeenCalledWith("Good");
    });
});
