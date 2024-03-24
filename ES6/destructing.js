//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

const car = {
    model: "Porsche",
    color: "black",
}

// Object destructing

const { model, color } = car;
console.log(model);
console.log(color);

// Assinging to new variable models

const {model: carModel, color: carColor} = car;
console.log(carModel);
console.log(carColor);