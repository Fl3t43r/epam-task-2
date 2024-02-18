let car = {
    color: 'black'
};

car.color = 'green';

car.power = function() {
    console.log("Engine power is 200hp");
};

function addFruits(pears, apples) {
    return pears + apples;
}

function greet(name) {
    if (name === "Yurii") {
        console.log("Hello, " + name);
    } else {
        console.log("There is no such name.");
    }
}

function getType(arg) {
    console.log("Type of argument:", typeof arg);
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Car color:", car.color);
car.power();
console.log("Total fruits:", addFruits(5, 10));
greet("John");
getType(10);
console.log("Is 17 prime?", isPrime(17));
