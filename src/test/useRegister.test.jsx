import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import useRegister from "../customHooks/useRegister";


describe("useRegister", () => {
    it("should return first name and a successful message", () => {
        const userDetails = {
            firstName: "Ikka",
            lastName: "Makaveli",
            email: "example@test.com",
            password: "securePassword123"
        };
        const {result} = renderHook(() => useRegister(userDetails));
        expect(result.current.name).toBe("Ikka");
        expect(result.current.message).toMatch("Registration Successful");
    });
});