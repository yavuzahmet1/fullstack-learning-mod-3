"use strict"

//? OBJECTS

const exampleObj = {
    propertyName: "value",//attribute, field// obj,boolean,number,string,function olabilir
    exampleFunction: function () {
        return console.log("first")
    },

    methodNameAlternative() {
        return console.log("this alternative declaration of function in object")
    }
}
exampleObj.exampleFunction()

console.log(exampleObj["propertyName"])
exampleObj["propertyName"]

const Car = {
    brand: "ford",
    model: "Mustang",
    year: "1998",
    details: {
        color: "black",
        engineSize: 4000
    },
    startEngine(param1) {
        console.log(param1)
        return "Engine started"
    },
    getDetails: function () {
        console.log(this.details)
        return ""
    }
}

Car.getDetails()


//? NEW KEYWORD Creaed a new instance of an object

const carConstructor = function (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
};
const car = new carConstructor("Ford", "mustang", 1988)
const car2 = new carConstructor("BMV", "5.20", 1990)
console.log(car.brand)
console.log(car2.year)

// JavaScript'te OOP şu şekilde uygulanır:

//     Sınıflar (Classes): class anahtar kelimesi kullanılarak tanımlanır.

//     Kalıtım (Inheritance): extends anahtar kelimesi kullanılarak bir sınıf başka bir sınıftan miras alabilir.

//     Kapsülleme (Encapsulation): private veya protected gibi erişim belirleyiciler JavaScript'te doğrudan desteklenmez, ancak semboller (Symbol) veya kapsülleme teknikleri kullanılarak uygulanabilir.

//     Çok Biçimlilik (Polymorphism): JavaScript'te, farklı nesneler aynı metodu farklı şekillerde uygulayabilir.

//?CLASSES

//class decration
class PascalCaseDeclaration { }

//Class expression
const PascalCaseExpression = class {
    undefinedProperty//only defination=undefined değer vermezsek
    propertyName = "value"

    constructor(parametre, parametre2) {
        this.parametre = parametre;
        this.parametre2 = parametre2;
    }

    methodName() {
        return this;
    }
}
const expInstance = new PascalCaseExpression(0, 1)
console.log(expInstance.methodName())
console.clear()

// Kapsülleme (Encapsulation): private veya protected gibi erişim belirleyiciler JavaScript'te doğrudan desteklenmez, ancak semboller (Symbol) veya kapsülleme teknikleri kullanılarak uygulanabilir.

//worst Aproach
let brand = "BMW";
let speed = 100;

function accelerate() {
    speed += 10;
    console.log(`${brand} is going at ${speed} km/h`);
}

accelerate()

//Better Approach