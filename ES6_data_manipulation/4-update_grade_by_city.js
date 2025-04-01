export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!(Array.isArray(list))) {
    throw TypeError('list must be an array');
  }
  if (typeof city !== 'string') {
    throw TypeError('city must be a string');
  }
  if (!(Array.isArray(newGrades))) {
    throw TypeError('newGrades must be an array');
  }
  const NewList = list.filter(
    (student) => student.location === city,
  )
    .map((student) => {
      let grade = 'N/A';
      for (const GradeElem of newGrades) {
        if (GradeElem.studentId === student.id) {
          grade = GradeElem.grade;
        }
      }
      return { ...student, grade };
    });
  return NewList;
}
