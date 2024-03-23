//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

const car = {
    name: "Porsche",
    color: "black",
}

// Object destructing

const { name, color } = car;
console.log(name);
console.log(color);

// Assinging to new variable names

const {name: carName, color: carColor} = car;
console.log(carName);
console.log(carColor);