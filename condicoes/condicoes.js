function calcular(){
    let txt = document.getElementById('txtvel')
    let veloc = Number(txt.value)
    let res = document.getElementById('res')

    if(veloc >60){
        res.innerHTML = `<p>Você está a ${veloc}km/h, velocidade acima do permitido. MULTADO!!! </p> `
        
    }else{
        res.innerHTML = `<p>Você está a ${veloc}km/h, dentro do permitido.</p> `
        
    }
}