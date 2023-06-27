var variable;
var variablelLet;

// const constante
const constante = 'Hola soy una constante'
console.log (constante)
// Constante no permite cambiar el valo, arroja error

var a = 1;
console.log(a);
a = 5
console.log(a);

let b = 3;
console.log(b);

b = 5
console.log(b);
// Diferencia entre var y let, es que var afecta todo el codigo y let afecta solo el bloqye dinde esta 

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++)
{
     var variable = "soy la segunda variable "
}
console.log(variable)

// variable let 
let variableLet = "Hola soy una variable VAR"

for (var i = 0; i < 3; i++)
{
     let variableLet = "soy la segunda variable "
}
console.log(variableLet)

console.log(typeof variable)