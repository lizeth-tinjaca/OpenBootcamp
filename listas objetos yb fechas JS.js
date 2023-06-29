//Listas, arrays o arreglo

const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null);
const lista3 = new Array(3);
const lista4 = [lista, lista2, lista3];

lista3[0] = "soy el primer elemento";
lista3[1] = 1234;
lista3[2] = false;

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos

const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiaomi",
  isWhite: false,
  contactos: ["Lizeth", "david", "Lauryn"],
  tarjeta: {
    marca: "sandysk",
    almacenamiento: 32,
  },
};
// Definir o editar nuevas propiedades al atributo
movil.año = 2019;
movil.marca = "samsung";

console.log(movil.contactos);
console.log(movil.tarjeta);
console.log(movil.tarjeta.almacenamiento);
console.log(movil.isWhite);
console.log(movil.año);

// Fechas
// Librerias de apoyo Moment.js

const ahora = new Date();
const fecha_milis = new Date(10); // Utilizando los milisegundos
const fecha_cadena = new Date("June 26 1997");
const fecha_valores = new Date(2023, 12, 06);
const dia = ahora.getDate();
const mes = ahora.getDate() + 1;
const año = ahora.getFullYear()

console.log(ahora);
console.log(fecha_milis);
console.log(fecha_cadena);
console.log(fecha_valores);
console.log(dia,mes,año);
