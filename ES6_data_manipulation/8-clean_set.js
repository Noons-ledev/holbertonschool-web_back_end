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
  let MyString = '';
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      MyString += value.replace(startString, '');
      MyString += '-';
    }
  });
  MyString = MyString.slice(0, -1);
  return MyString;
}
