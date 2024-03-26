const person = {
    name: "Ivan",
    age: "17",
};

//Spread operator (for copy array or object)
const secondPerson = { ...person };

//Rest operator (merge single elements to array)
const toArray = (...args) => {
    return args;
};
