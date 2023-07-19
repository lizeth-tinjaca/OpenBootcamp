const lista = new Array(5);
const date = new Date(1997, 11, 14);

lista[0] = "Lizeth";
lista[1] = "25";
lista[2] = true;
lista[3] = date.getFullYear() + " " + date.getMonth() + " " + date.getDate();
lista[4] = {
  titulo: " Sangre de Campeon",
  autor: "Carlos Cuauhtémoc",
  fecha: 2000,
  url: "https://www.cordivino.com/gallery/sangre%20de%20campeones.pdf",
};
console.log(lista);