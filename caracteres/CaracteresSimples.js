const texto = '1,2,3,4,5,6,a.b c!8?e'

const regexVirgula = /,/

console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

console.log(texto.match(/1/g))
console.log(texto.match(/1/i))
console.log(texto.match(/A/g))
console.log(texto.match(/A/gi))
console.log(texto.match(/a.b c/gi))
