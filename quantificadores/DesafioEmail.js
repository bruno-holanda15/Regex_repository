const texto = `
    Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com 
    - bruninn_zero@toptop.com
    - top234.sampaio@email23.info.com
     
`

const regex = /[\w.]+@[\w.]+\.[\w.]{2,4}\.?\w{0,2}/g
// const regex2 = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g

console.log(texto.match(regex))