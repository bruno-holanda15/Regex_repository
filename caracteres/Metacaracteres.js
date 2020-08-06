// . ? * + - ^$ | [ ] { } ( ) \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g

console.log(texto.split(regexPonto))

//esta escapando os metacaracteres para localiza-los como valor 
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
