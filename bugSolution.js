function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (x === undefined) {
    return -1; // Handle undefined case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-number case
  }
  // ... rest of your code
}