//The plus operator + applied to a single value, doesn’t do anything to numbers. 
// But if the operand is not a number, the unary plus converts it into a number.

let y = true;
console.log(+y)

//The Unary (+) can convert string representations of integers and floats, as well as the non-string values true, false, and null.
//example
 let x = "100"
 console.log (+x)


//it doesn’t work as expected on empty strings, alphanumeric strings, empty objects etc.
var a = ''
console.log(+a)
var b ={}
console.log (+b)


