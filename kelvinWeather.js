//This is the temp in kelvin.
const kelvin = 0;

//This is the temp in celsius.
var celsius = kelvin - 273;

//This is the calculation to make fahrenheit.
var fahrenheit = celsius * (9/5) + 32;

//Getting rid of the decimal point.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Being a showoff.
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
