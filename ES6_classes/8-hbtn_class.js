export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw TypeError('size must be a number!');
    }
    this._size = value;
  }

  set location(value) {
    if (!(value instanceof String)) {
      throw TypeError('location must be a string!');
    }
    this._location = value;
  }

  toString() {
    return this.location;
  }

  valueOf() {
    return this.size;
  }
}
