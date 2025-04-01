export default function setFromArray(list) {
  if (!(Array.isArray(list))) {
    throw TypeError('list must be an array');
  }
  return new Set(list);
}
