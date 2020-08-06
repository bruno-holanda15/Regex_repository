const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi))  // inicio da linha/string quando usa o ^fora do conjunto 
console.log(texto.match(/r$/gi))  // fim da linha ou da string $
console.log(texto.match(/^r.*r$/gi))
console.log(texto.match(/^r[\s\S]*r$/gi))  // conjunto[\s\S] engloba o \n para captura




