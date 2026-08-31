import assert from "node:assert/strict"
import test from "node:test"

import { getUserInitials } from "../lib/user-initials.ts"

test("uses the first letters of the first and last names", () => {
  assert.equal(getUserInitials("David Bensadon"), "DB")
})

test("uses the last word for a compound full name", () => {
  assert.equal(getUserInitials("David Ben Sadon"), "DS")
})

test("normalizes whitespace and preserves accented initials", () => {
  assert.equal(getUserInitials("  élise   Noël  "), "ÉN")
})

test("uses one initial when only one name is available", () => {
  assert.equal(getUserInitials("David"), "D")
})

test("uses a neutral fallback when the name is empty", () => {
  assert.equal(getUserInitials("   "), "U")
})
