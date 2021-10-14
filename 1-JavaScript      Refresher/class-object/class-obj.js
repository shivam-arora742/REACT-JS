// Class and Objects in JavaScript:

// Base Class:
class Fruit {
  fruit_basket = 10;
  printFruit() {
    console.log("fruit basket has :", this.fruit_basket, "fruits");
  }
}

// Derive Class:
class Apple extends Fruit {
  printApple() {
    console.log("Apples");
  }
}

// Object:
const obj = new Apple();
obj.printApple();
obj.printFruit();
console.log(++obj.fruit_basket);
