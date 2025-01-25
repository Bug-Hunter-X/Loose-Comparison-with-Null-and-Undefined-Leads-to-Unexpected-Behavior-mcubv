# Loose Comparison Bug in JavaScript

This repository demonstrates a common JavaScript bug related to loose comparison (==) of null and undefined values.  Loose comparison can lead to unexpected results and difficult-to-debug errors.

The bug uses loose comparison to check for null and undefined.  This leads to incorrect results because of type coercion.  The solution uses strict comparison (===) to avoid these issues.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the incorrect results when loose comparison is used.
3. Open `bugSolution.js` to see the corrected code using strict comparison.

## Lesson Learned

Always use strict equality (===) when comparing values in JavaScript, especially when dealing with null and undefined.  This prevents unexpected type coercion and makes your code more robust and easier to maintain.