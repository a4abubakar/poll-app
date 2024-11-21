import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import steps from "../../utils/stepsConfig";

describe("Carousel", () => {
    const mockOnStepChange = jest.fn();

    it("highlights the active step", () => {
        render(<Carousel steps={steps} currentStep={0} onStepChange={mockOnStepChange} />);
        const activeCircle = screen.getAllByRole("button")[0];
        expect(activeCircle).toHaveClass("active");
    });

    it("calls onStepChange when a circle is clicked", () => {
        render(<Carousel steps={steps} currentStep={0} onStepChange={mockOnStepChange} />);
        const circles = screen.getAllByRole("button");
        fireEvent.click(circles[1]);
        expect(mockOnStepChange).toHaveBeenCalledWith(1);
    });

});
