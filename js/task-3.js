class StringBuilder {
  #value;
  constructor(inititalValue) {
    this.#value = [inititalValue];
  }

  getValue() {
    return this.#value.join("");
  }

  padEnd(str) {
    this.#value.push(str);
  }

  padStart(str) {
    this.#value.unshift(str);
  }

  padBoth(str) {
    this.#value.push(str);
    this.#value.unshift(str);
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

// I decided to make an implementation similar to the previous one.

// class StringBuilder {
//   #value;
//   constructor(inititalValue) {
//     this.#value = [inititalValue];
//   }

//   get value() {
//     return this.#value.join("");
//   }

//   padEnd(str) {
//     this.#value.push(str);
//   }

//   padStart(str) {
//     this.#value.unshift(str);
//   }

//   padBoth(str) {
//     this.#value.push(str);
//     this.#value.unshift(str);
//   }
// }
// const builder = new StringBuilder(".");
// console.log(builder.value); // "."
// builder.padStart("^");
// console.log(builder.value); // "^."
// builder.padEnd("^");
// console.log(builder.value); // "^.^"
// builder.padBoth("=");
// console.log(builder.value); // "=^.^="
