export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw TypeError('set must be a Set');
  }
  if (typeof startString !== 'string') {
    throw TypeError('startString must be a string');
  }
  if (startString.length === 0) {
    return '';
  }
  return [...set].filter((value) => value.startsWith(startString))
    .map((value) => value.replace(startString, ''))
    .join('-');
}
