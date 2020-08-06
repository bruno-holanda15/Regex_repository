const texto1 = 'De longe eu vi o fogo e uma pessoa gritando:  FOGOOOOOO'
const texto2 = 'There is a big fog in NYC'

const regexFogo = /fogo+/gi // o +, é 1 ou + caracteres

console.log(texto1.match(regexFogo))
console.log(texto2.match(regexFogo))

const texto3 = 'Os número: 0123456789.'

console.log(texto3.match(/\d/g))  
console.log(texto3.match(/\d+/g))  
console.log(texto3.match(/[0-9]+/g))
