import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import PollForm from "./PollForm";
import stepsConfig from "../../utils/stepsConfig";

global.alert = jest.fn();

beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
    });
});

describe("PollForm", () => {
    it("submits the data correctly", async () => {
        render(<PollForm />);
        stepsConfig.forEach((step) => {
            fireEvent.click(screen.getByText(step.options[0].label));
        });
        fireEvent.click(screen.getByText("Submit"));
        await waitFor(() => expect(global.alert).toHaveBeenCalledWith("Data submitted successfully!"));
    });
});
