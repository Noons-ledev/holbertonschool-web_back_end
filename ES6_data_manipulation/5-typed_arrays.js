export default function createInt8TypedArray(length, position, value) {
  if (!(position >= 0 || position < length)) {
    throw Error('Position outside range');
  }
  const array = new ArrayBuffer(length);
  const view = new DataView(array);
  view.setInt8(position, value);
  return view;
}
