console.log('Hey TypeScript!s');

const pizzas = [
    { name: 'pepper', toppings: ['pepper'] }
];

const mapped = pizzas.map((pizza, i) => pizza.name.toUpperCase() + i)

const pizza = {
    name: 'Blazing Inferno',
    price: 15,
    getName() { return pizza.name }
}

const toppings = ['pepperoni'];

const order = {
    pizza,
    toppings
}

console.log(pizza.getName())
console.log(order);

function multiply(a: number, b: number) {
    return a * b
}
console.log(multiply(5, 5));



function sumAll(arr: any[]) {
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 78, 9]);

console.log(sum);

const foo = ['bacon', 'chilli'];
const newToppings = ['pepper'];
const allToppings = [...newToppings, ...foo]
console.log(allToppings)

const hey = {
    name: 'Scott',
    eyes: "yellow"
}

const there = ['what'];

const what = {
    ...hey,
    there
}

const sandwich = {
    name: 'beesf',
    fillings: ['beef', 'mustard']
};

function orderTwo({ name, fillings }: { name: string, fillings: any[] }) {
    console.log(name, fillings);
}

const [one, two] = sandwich.fillings;

console.log(one, two)

orderTwo(sandwich);