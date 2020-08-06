const texto = `
    CPF dos aprovados:
    - 600.567.890-12
    - 269.242.000-00 
    - 765.998.345-23
    - 745.098.355-23
`

const regex = /\d{3}\.\d{3}\.\d{3}-\d{2}/g

console.log(texto.match(regex))

