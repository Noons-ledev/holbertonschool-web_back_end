export default function getStudentsByLocation(list, city) {
  if (!(Array.isArray(list))) {
    throw TypeError('list must be an array');
  }
  if (typeof city !== 'string') {
    throw TypeError('city must be a string');
  }
  const NewList = list.filter((element) => element.location === city);
  return NewList;
}
