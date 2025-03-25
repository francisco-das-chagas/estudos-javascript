// Uma Array [] representa uma lista de dados. Para retornar um valor passamos o [index] na frente
// da variável, o index começa em 0

// ex: 

// const lista = ['JavaScript', 'HTML', 'CSS'];
// const nome = lista[0]
// console.log(nome)

// const js = lista[0]
// const html = lista[1]
// const css = lista[2]


// LOOP
// Um loop pode ser utilizado para executar um código para cada item da array

const lista = ['JavaScript', 'HTML', 'CSS', 'Python'];

const body = document.querySelector('body')

for (let index = 0; index < lista.length; index++) {
 
  body.innerHTML += ' <main> <li>' + lista[index] + '</li> </main>'
}