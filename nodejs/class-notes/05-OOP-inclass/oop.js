"use strict"

/* -------------------------------------------------------
                OBJECTS & OOP & CLASSES
------------------------------------------------------- *

//? OBJECTS
const expObj = {

    propertyName: 'value', // attribute, field // object, array, boolean, number, string, function

    methodName: function () {
        return console.log('Functions called method in object')
    },

    methodNameAltarnative() {
        return console.log('this is altarnative decleration of function in object')
    }
};

console.log(expObj.propertyName);
expObj.methodName();

console.log(expObj['propertyName']);
expObj['methodName']();

console.clear()

/*------------------------------------------------------- *
//? 'THIS' KEYWORD Refers to the execution context (object)


const Car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    details: {
        color1: 'white',
        color2: 'black',
        engineSize: 4900
    },

    getDetail: function () {
        // console.log(this);
        return console.log(this.details)
    },

    getDetailArr: () => {
        return console.log(this.details)
    }
};


// Car.getDetail()
Car.getDetailArr()

/*------------------------------------------------------- *
//? "NEW" KEYWORD Creates a new instance of an object

const carConstructor = function (brand, model, year) {
    this.brand = brand
    this.model = model
    this.year = year
};

const car = new carConstructor('Ford', 'Mustang', 1967)

console.log(car);
console.log(car.brand);

const car2 = new carConstructor('BMW', '2.15', 1967)

console.log(car2);
console.log(car2.brand);

/*------------------------------------------------------- *
//? OOP: Object Oriented Programming

//* Class is a blueprint for creating objects. It defines properties  and methods that objects will have.
//* OOP is a way of structuring code using objects.
//* OOP helps organize code by preventing:
//- Code duplication (Inheritance)
//- Messy logic (Encapsulation & Abstraction)
//- Difficult code reuse (Polymorphism)


//* OOP is the concept.
//* Classes are the way to implement OOP.

// Class Declaration:
class PascalCaseDeclaration { }

// Class Expression:
const PascalCaseExpression = class {

    undefinedProperty // only definatin, undefined

    propertyName = 'value'

    constructor(parametre1, parametre2) {
        this.pamametre1 = parametre1
        this.pamametre2 = parametre2
    }

    methodName() {
        return this
    }
}

const exp1Instance = new PascalCaseExpression(0, 1);
console.log(exp1Instance);
console.log(exp1Instance.pamametre1);
console.log(exp1Instance.methodName());

/*------------------------------------------------------- *
//? ENCAPSULATION
// Bundling data (variables) and methods (functions) into a single unit (object).
// Protects data from direct access by restricting modification.


// Worst Approach
let brand = 'BMW';
let speed = 100;

function accelerate() {
    speed += 10;
    console.log(`${brand} is going at ${speed} km/h`)
}
// accelerate();


// Better Approach
class Car {

    #speed; // Priviate variable

    constructor(brand, speed) {
        this.brand = brand
        this.#speed = speed
    }

    accelerate() {
        this.#speed += 10
        return console.log(`${this.brand} is going at ${this.#speed} km/h`)
    }
};

const bmw = new Car(brand, 100);
console.log(bmw.speed);
bmw.accelerate()


/*------------------------------------------------------- *
//? ABSTRACTION
// Hides complex logic and only exposes necessary details.

class Payment{

    proccessPayment(amount) {
        this.#connectToBank()
        console.log(`Payment of ${amount} procceed`)
    }

    #connectToBank() {
        console.log('Connecting to bank...');
    }

};

const pay = new Payment();
pay.proccessPayment(200)

/*------------------------------------------------------- *
//? INHERITANCE
// Allows a child class to inherit properties and methods from a parent class.
// SUPER: Parent Class - THIS: Child Class

// Parent Class;
class Vehicle {

    isRunning = false

    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    startEngine() {
        this.isRunning = true
        return console.log(`${this.brand} ${this.model}'s engine started!`);
    }

    stopEngine() {
        this.isRunning = false
        return console.log(`${this.brand} ${this.model}'s engine stopped!`);
    }
};

// Child Class; (inherits from Vehcile)
class Car extends Vehicle {

    constructor(brand, model, year, fuelType) {
        super(brand, model, year) // Calling parent constructor
        this.fuelType = fuelType
    }

    honk() {
        return console.log(`${this.brand} ${this.model} honks `);
    }
};

const myCar = new Car('Toyata', 'Carolla', 2024, 'Petrol');
myCar.startEngine();
myCar.stopEngine();

// GrandChild Class; (inheritence from Car)
class ElectiricCar extends Car {

    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year, 'Electiric')
        this.batteryCapacity = batteryCapacity
    }

    chargeBattery() {
        return console.log(`${this.brand} ${this.model} is charging. Battery: ${this.batteryCapacity} kWh `);
    }
};

const myTesla = new ElectiricCar('Tesla', 'Model Y', 2024, 500);
console.log('\n');

myTesla.startEngine();
myTesla.chargeBattery();
console.log(myTesla.fuelType);
myTesla.honk();
myTesla.stopEngine();

console.clear();

/*------------------------------------------------------- *
//? POLYMORPHISIM:
//  A child class to have different behaviors for the same method as the parent class.
// - Method Overriding: Child class redefines a method from the parent class.
// - Method Overloading: JavaScript does not support it natively, but TypeScript does.

// Parent Class
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log('Some generic animal sound..');
    }
};

// Child Class: Dog (inherits from Animal)
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks: Woof!`);
    }
};

// Child Class: Cat (inherits from Animal)
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows: Meows!`);
    }
};


// makeSound(word){ // Overloading exp
//     console.log(`${this.name} says: ${word}`);
// }

const genereicAnimal = new Animal('Generic Animal');
const myDog = new Dog('Magetron');
const myCat = new Cat('Supa');

genereicAnimal.makeSound()
myDog.makeSound()
myCat.makeSound()

/*------------------------------------------------------- *
//? Access Modifiers:
// - PUBLIC: (Parent: Yes, Child: Yes, Instance: Yes)
// - PROTECTED: (Parent: Yes, Child: Yes, Instance: No) (JS does not support.)
// - PRIVATE: (Parent: Yes, Child: No, Instance: No)

class Vehicle {

    vehicleIsActive = false // Public property

    _protectedProperty = 'protected Property' // Proctected Property
    _protectedMethod() { return this } // Proctected Method

    #privatePropery = 'private value' // Private Property
    #privateMethod() { return this } // Private Property

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }

    getDetails() {
        console.log('vehicleGetDetails worked');
        return this.vehicleType
    }
};

class Car extends Vehicle {
    isRunning = false

    constructor(brand, model, year, vehicleType = 'Car' ) {
        super(vehicleType)
        this.brand = brand
        this.model = model
        this.year = year
    }

    startEngine() {
        this.isRunning = true
        return console.log(`${this.brand} ${this.model}'s engine started!`);
    }

    getDetails() {
        console.log('Car.getDetail worked');
        return super.getDetails()
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford.vehicleIsActive);
console.log(Ford.protectedProperty); // js does not support
console.log(Ford.privatePropery);
Ford.getDetails()

/*------------------------------------------------------- */
//? GETTER & SETTER METHODS:
//? "STATIC" KEYWORD: Class'dan direct access. (Instance does not access)


class Car {
    isRunning = false
    #price = 5000

    constructor(brand, model, year,) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    startEngine() {
        this.isRunning = true
        return console.log(`${this.brand} ${this.model}'s engine started!`);
    }

    get getPrice() {
        console.log('Fiyat goruntulendi..');
        return this.#price
    }

    set setPrice(newPrice) {
        console.log('Fiyat guncellendi..');
        this.#price = newPrice
    }

    // Static method & attribute
    // Statik property veya methodlara intance ile erişilmez.
    static staticProperty = 'this is static attribute'

    // Static methodlarda this ifadesi sadece statikleri çağırır.
    static staticMethod() {
        console.log('this is static method');
        return this
    }

}

const Ford = new Car('Ford', 'Mustang', 1967);
console.log(Ford.price);
/// getter ve setter methodlar bir property gibi kullanılılır:
console.log(Ford.getPrice);
// Ford.setPrice(5000) // Setter method normal method gibi çağrılmaz.
Ford.setPrice = 6000
console.log(Ford.getPrice);

// How to access static attributes & methods // Object.entries()
console.log(Car.isRunning);
console.log(Car.staticProperty);
console.log(Car.staticMethod());
