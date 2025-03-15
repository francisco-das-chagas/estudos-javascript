
//           FUNÇÕES
// As funções (Function) são blocos de código que podem ser executados. 
// A execução pode acontecer em diferentes cenários e diversas vezes. 
// Para executar utilizamos os parênteses ();

function logCursos() {
  const nome = 'Javascript';
  const horas = '40 Horas';
  console.log(nome, horas);
}

logCursos();
logCursos();
logCursos();

// Parâmetro e Argumento
// Podemos definir parâmetros durante a criação da função. 
// Durante a execução, podemos passar argumentos ('nome'), 
// que serão utilizados nos parâmetros.

// nome e horas são os parâmetros
function logCursos(nome, horas) {;  
  console.log(nome, horas, 'horas');
}
// JavaScript e 40 são os argumentos
logCursos('javascript', '40');
logCursos('HTML', '20');
logCursos('CSS', '30');

// Retorno
// Toda função retorna um valor (tipo de dado). 
// Se o retorno não for declarado utilizado a palavra return, 
// o valor retornado será undefined.

function logCursos(nome) {
  console.log(nome);
  return nome + ' Log'
}

const valor = logCursos('JavaScript');
console.log(valor)

// Escopo
// Uma função cria o seu próprio escopo. 
// Isso significa que variáveis declaradas dentro
// de uma função, não podem ser acessadas fora das mesmas. 
// Porém, variáveis criadas fora da função,
// podem ser acessadas pela mesma.
const nome = 'JavaScript'

function logCursos() {
  console.log(nome);
}
// Loga JavaScript
logCursos();

function logLivro() {
  const livro = 'O Senhor dos Anéis';
  console.log(livro)
}
logLivro();

//Erro, pois a constante livro não existe
console.log(livro);