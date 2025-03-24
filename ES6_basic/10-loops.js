export default function appendToEachArrayValue(array, appendString) {
  for (const [index, elem] of array.entries()) {
    // eslint-disable-next-line
    array[index] = appendString + elem;
  }
  return array;
}
