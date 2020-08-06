const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g))    // não precisa de escape dentro do conjunto 
console.log(texto.match(/[$-?]/g))      // intervalo de símbolos 

console.log(texto.match(/[$\-?]/g))     // isso não é um intervalo
console.log(texto.match(/[-?]/g))     // isso não é um intervalo

