export default function hasValuesFromArray(set, array) {
  if (!(Array.isArray(array))) {
    throw TypeError('array must be an array');
  }
  if (!(set instanceof Set)) {
    throw TypeError('set must be a Set');
  }
  const bool = array.every((element) => set.has(element));
  return bool;
}
