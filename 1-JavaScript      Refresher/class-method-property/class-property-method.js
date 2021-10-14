// Older syntax for class-method-properties:
// class Person {
//   constructor() {
//     this.name = "shibu_A";
//     this.age = 20;
//   }
//   printDetails() {
//     console.log("Name:" + this.name + " " + "Age:" + this.age);
//   }
// }

// Object
// obj = new Person();
// obj.printDetails();

// New syntax for class-method-properties:
class Person {
  //doesnt require use of constructor.
  name = "shibu_A";
  age = 20;

  //   use of arrow functions():
  printDetails = () => {
    console.log("Name:" + this.name + " " + "Age:" + this.age);
  };
}

// Object
obj = new Person();
obj.printDetails();
