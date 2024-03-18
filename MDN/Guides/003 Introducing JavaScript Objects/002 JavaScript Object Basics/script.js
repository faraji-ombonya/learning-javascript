const person1 = {
  name: ["Faraji", "Fuji"],
  age: 24,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

// Alternative Syntax
const person2 = {
  name: ["Faraji", "Fuji"],
  age: 24,
  bio() {
    console.log(`${this.name} is ${this.age} years old`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  },
};

// Objects as object properties
const person = {
  name: {
    first: "Faraji",
    last: "Fuji",
  },
  age: 24,
  bio() {
    console.log(`${this.name} is ${this.age} years old`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  },
};
