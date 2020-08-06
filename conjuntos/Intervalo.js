const texto = '1,2,3,4,5,6,a.b c![?ef'

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-5]/g))
console.log(texto.match(/[A-D1-3]/gi))


