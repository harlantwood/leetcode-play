import { expect } from 'jsr:@std/expect'
import { isMatch } from './regex.ts'

const testCases = [
  { input: 'ab', pattern: '.*c', expected: false },
  { input: 'ab', pattern: 'ab*', expected: true },
  { input: 'aa', pattern: 'a', expected: false },
  { input: 'aa', pattern: 'a*', expected: true },
  { input: 'aaa', pattern: 'a*a', expected: true },
  { input: 'ab', pattern: '.*', expected: true },
  { input: 'aab', pattern: 'c*a*b', expected: true },
  { input: 'mississippi', pattern: 'mis*is*p*.', expected: false },
]

testCases.forEach(({ input, pattern, expected }) => {
  Deno.test(`isMatch('${input}', '${pattern}') should be ${expected}`, () => {
    expect(isMatch(input, pattern)).toBe(expected)
  })
})
