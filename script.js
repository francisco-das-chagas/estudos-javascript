// Um objeto é uma forma de mantermos dados associados e organizados. Ele é 
// criado com chaves {}. "Tudo é objeto", vocês já vão ver o motivo.

const nome = 'O Senhor dos Anéis';
const ano = 1954;
const autor = 'J. R. R. Tolkien';

const nomeFilme = 'O senhor dos Anéis';
const anoFilme = 2001;
const diretorFilme = 'Peter Jackson';

const livro = {
    nome: 'O Senhor dos Anéis',
    ano: 1954,
    autor: 'J. R. R. Tolkien',
};
const filme = {
  nome: 'O Senhor dos Anéis',
  ano: 2001,
  autor: 'J. R. R. Tolkien',
  diretor: 'Peter Jackson'

}
console.log(livro.nome === nome)