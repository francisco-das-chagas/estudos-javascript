// forEach
// Arrays e objetos que se parecem com Array's, possuem o método forEach. Esse
// método recebe uma função que é executada para cada item da Array.

// const lista = ['JavaScript', 'HTML', 'CSS', 'PHP']
// function logarItems(item, index) {
//   console.log(item, 'no idex: ', index)
// }
// lista.forEach(logarItems);

// // você pode escrever a função no argumento:
// lista.forEach(function (item, index) {
//   console.log(item, 'no index:', index);
// });

// const lista = ['JavaScript', 'HTML', 'CSS', 'PHP', 'PYTHON']
// const body = document.querySelector('body')

// function adicionarBody(item) {
//  body.innerHTML += "<li>" + item + "</li>";
// }

// lista.forEach(adicionarBody)

// // querySelectorAll
// O método document.querySelectorAll(), seleciona todos os elementos que
// suprimem a condição do argumento e retorna uma array-like (objeto que se parece com uma array).

const links = document.querySelectorAll("nav a");

function logHref(item) {
  const href = item.href;
  console.log(href);
}
links.forEach(logHref);

console.log(links[links.length - 1]);

// Métodos e Propriedades
// Uma Array possui diferentes métodos e propriedades.

const lista = ["JavaScript", "HTML", "CSS"];

//Retorna o total
const total = lista.length;

// Remove o último
const ultimo = lista.pop();

// Remove o primeiro
const primeiro = lista.shift();

// Adiciona ao final
lista.push("PHP");

console.log(lista);
