function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resp = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Errou')
    }else{
       var fsex = document.getElementsByName('radsx')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       img.style = 'center'
       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 13){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem_masc.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('src', 'idodos.png')
            }

       }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >=0 && idade < 13){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 21){
                img.setAttribute('src', 'jovem_fem.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.png')
            }else{
                img.setAttribute('src', 'idosa.png')
            }
       }
       resp.style.textAlign = 'center'
       resp.innerHTML = `Detectamos ${genero} com ${idade} anos`
       resp.appendChild(img)
    }
    
}
