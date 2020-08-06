const texto = 'a   b'

// soluções do desafio
console.log(texto.match(/a\s\s\sb/g))
console.log(texto.match(/a...b/g))
console.log(texto.match(/a   b/g))
console.log(texto.match(/a\s+b/g))
console.log(texto.match(/a {3}b/g))
