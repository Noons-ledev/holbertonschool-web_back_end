export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }
  const Keys = map.keys();
  for (const key of Keys) {
    if (map.get(key) === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
