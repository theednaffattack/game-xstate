export function arrayEquals(
  a: [number, number],
  b: [number, number] | number[]
) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}
