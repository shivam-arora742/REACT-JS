// Reference & Primitve Data Types:

// Primitive:int,string,boolean.
// they copy same value when assigned to other.
// example:
let x = 10;
let y = x;
x = 11;
console.log(y);
console.log(x);

// Reference:array & objects .
// they assign a pointer of other.
// example:
let obj = {
  name: "shivam",
};
let newObj = obj;
obj.name = "vijay";

console.log(newObj);
// to copy an array/object elements and not pointer to it,
// we use (...)spread operator.
