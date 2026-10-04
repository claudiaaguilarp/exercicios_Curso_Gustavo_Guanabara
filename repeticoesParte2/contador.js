let res = document.getElementById('res')


function contar(){
    let inicio = document.getElementById('txtinicio')
    let final = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `Impossível contar sem informação dos dados! \u{1f61f}`
    }else{
        res.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += `\u{1F3C1}`
        }else if(i > f){
            for(let c = i; c >=f; c-= p){
                res.innerHTML += `${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            res.innerHTML = `Favor validar dados de entrada \u{1f61f}`
        }


        
        
    }

}
