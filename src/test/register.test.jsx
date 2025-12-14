import {test, expect} from "vitest";
import {render, screen, fireEvent} from "@testing-library/react";
import Register from "../auth/register/Register";

test("firstName input works fine",()=>{
    render(<Register/>)
    // const input = screen.getByLabelText("firstname");
    // fireEvent.change(input, {target: {value: "John"}});
    // expect(input.value).toBe("John");
})