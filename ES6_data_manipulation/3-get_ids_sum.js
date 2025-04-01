export default function getStudentIdsSum(list) {
  if (!(Array.isArray(list))) {
    throw TypeError('list must be an array');
  }
  const NewList = list.reduce((accumulator, element) => accumulator + element.id, 0);
  return NewList;
}
