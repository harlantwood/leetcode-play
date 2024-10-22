export function isMatch(input: string, pattern: string): boolean {
  // console.log({ input, pattern })
  let result
  const firstMatch = input.length > 0 &&
    (input[0] === pattern[0] || pattern[0] === '.')
  if (input.length === 0 && pattern.length === 0) {
    result = true
  } else if (pattern[1] === '*') {
    if (input.length === 0 && pattern.length === 2) {
      result = true
    } else if (firstMatch && pattern.length === 2) {
      result = true
    } else if (isMatch(input, pattern.slice(2))) {
      result = true
    } else if (firstMatch && isMatch(input.slice(1), pattern)) {
      result = true
    } else {
      result = false
    }
  } else if (firstMatch && isMatch(input.slice(1), pattern.slice(1))) {
    result = true
  } else {
    // console.log('else: ', { input, pattern })
    result = false
  }
  // console.log({ result })
  return result
}
