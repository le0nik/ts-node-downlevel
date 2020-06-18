function getArrayOrUndefined() {
  return Math.random() > 0.5 ? [] : undefined;
}

// TS should throw an error on next line
const result = [...getArrayOrUndefined()];