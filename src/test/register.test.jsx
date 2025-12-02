import {test, expect} from "vitest";
import Register from "../auth/register/Register";
import {render, screen, fireEvent} from "@testing-library/react";

test("that the firstName input collect firstName from the user", () => {
    render(<Register />);
    const input = screen.getByLabelText(/firstName/i);
    fireEvent.change(input, {target:{value: "Makaveli"}});
    expect(input.value).toBe("Makaveli");
});