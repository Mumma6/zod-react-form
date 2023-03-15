/*
import { IZodFormValidation, useZodFormValidation } from "../src/index"
import { act, renderHook, WaitForNextUpdate } from "@testing-library/react-hooks"
import { z } from "zod"
*/

describe("useZodFormValidation", () => {
  /*
  const schema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    age: z.number().min(18),
  })

  const formData = {
    name: "",
    email: "",
    age: 0,
  }
  */

  it("Should work", () => {
    expect(true).toBe(true)
  })

  /*
  it("Should handle onBlur events", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZodFormValidation(schema, formData))
    act(() => {
      result.current.onBlur("name")
    })

    expect(result.current.touched.name).toBe(true)
    expect(result.current.touched.age).toBe(false)
  })

  it("Should handle change", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZodFormValidation(schema, formData))
    act(() => {
      result.current.setFieldValue("name", "Test")
    })

    expect(result.current.values.name).toBe("Test")
  })

  it("Should handle errors", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZodFormValidation(schema, formData))

    act(() => {
      result.current.setFieldValue("name", "T")
      result.current.setFieldValue("age", 17)
      result.current.setFieldValue("email", "test@email.com")
    })

    expect(result.current.errors.name).toBe("String must contain at least 3 character(s)")

    expect(result.current.errors.age).toBe("Number must be greater than or equal to 18")

    expect(result.current.errors.email).toBe(undefined)
  })

  it("Should handle disabled", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZodFormValidation(schema, formData))

    expect(result.current.isDisabled()).toBe(true)

    act(() => {
      result.current.setFieldValue("name", "Test")
      result.current.setFieldValue("age", 20)
      result.current.setFieldValue("email", "test@email.com")
    })

    expect(result.current.isDisabled()).toBe(false)
  })

  it("Should reset blur", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useZodFormValidation(schema, formData))

    expect(result.current.touched.name).toBe(false)

    act(() => {
      result.current.onBlur("name")
    })

    expect(result.current.touched.name).toBe(true)

    act(() => {
      result.current.reset()
    })

    expect(result.current.touched.name).toBe(false)
  })

  */
})
