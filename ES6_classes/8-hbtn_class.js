export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('size must be number typed');
    }
    if (typeof location !== 'string') {
      throw TypeError('location must be string typed');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw TypeError('size must be a number!');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw TypeError('location must be a string!');
    }
    this._location = value;
  }

  toString() {
    return String(this._location);
  }

  valueOf() {
    return Number(this._size);
  }
}
