export function concat(array, ...values) {
  let arr = [...array];
  values.forEach((value) => {
    if (Array.isArray(value)) {
      arr.push(...value);
    } else {
      arr.push(value);
    }
  });
  return arr;
}
