class StringBuilder {
  #value;
  constructor(inititalValue) {
    this.#value = inititalValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    const lastElement = this.#value.length - 1;
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
