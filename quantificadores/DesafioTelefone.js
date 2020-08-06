const texto = `
    Lista telefônica:
    - (11) 98756-1212
    -98765-4321 
    - (24)24365-9921 
    - (85) 2000-9921 
    - (85)9000-4444 
    
`
const regex = /\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g

console.log(texto.match(regex))