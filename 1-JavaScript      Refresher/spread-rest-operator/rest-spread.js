// Spread-Rest Operator:

// Spread operator:used to split array or object elements:
// for array:
let arr = [1, 2, 3];
// let newArr = [arr, 4, 5, 6];
let newArr = [...arr, 4, 5, 6];

console.log(newArr);

// for object:
let obj = {
  name: "shibu_a",
};
let newObj = {
  ...obj,
  age: 20,
};

console.log(newObj);

// Rest :to merge all function arguments into array:
function fn(...args) {
  for (i of args) {
    console.log(" " + i);
  }
}

fn(1, 2, 3,5,6,7,8);
