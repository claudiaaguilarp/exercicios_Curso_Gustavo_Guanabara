let iniciotxt = document.getElementById('txtinicio')
let fimtxt = document.getElementById('txtfim')
let passotxt = document.getElementById('txtpasso')
let msg = document.getElementById('resp')
let prepcont = document.getElementById('res')
let contagem = []

function contar(){
    let inicio = Number(iniciotxt.value)
    let fim = Number(fimtxt.value)
    let passo = Number(passotxt.value)
    prepcont.innerHTML = ` `
    for(let c = inicio; c <= fim; c+= passo ){
    }
    msg.innerHTML += `<p> ${c}</p>`
}
