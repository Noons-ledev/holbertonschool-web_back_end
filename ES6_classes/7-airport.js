export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (!(value instanceof String)) {
      throw TypeError('Name must be a string');
    }
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (!(value instanceof String)) {
      throw TypeError('Code must be a string');
    }
    this._code = value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
