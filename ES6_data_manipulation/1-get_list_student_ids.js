export default function getListStudentIds(list) {
  if (!(Array.isArray(list))) {
    return [];
  }
  const NewList = list.map((element) => element.id);
  return NewList;
}
