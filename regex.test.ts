import { expect } from "jsr:@std/expect";
import { isMatch } from "./regex.ts";

Deno.test("check if pattern matches input", () => {
  expect(isMatch('aa', 'a')).toBe(false)
  expect(isMatch('aa', 'a*')).toBe(true)
  expect(isMatch('ab', '.*')).toBe(true)
  expect(isMatch('aab', 'c*a*b')).toBe(true)
  expect(isMatch('mississippi', 'mis*is*p*.')).toBe(false)
});
