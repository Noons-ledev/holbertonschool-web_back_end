export default function createInt8TypedArray(length, position, value) {
  if (typeof length !== 'number') {
    throw TypeError('length must be a number');
  }
  if (typeof value !== 'number') {
    throw TypeError('value must be a number');
  }
  if (typeof position !== 'number') {
    throw TypeError('position must be a number');
  }
  if (!(position >= 0 || position < length)) {
    throw Error('Position outside range');
  }
  let array = new ArrayBuffer(length);
  const view = new DataView(array);
  array = new Int8Array(array);
  array[position] = value;
  return view;
}
