const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))

// quantificadores NÃO gulosos (lazy)... usando ? para acionar esse padrão 
console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))
