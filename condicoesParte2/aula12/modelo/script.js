
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'image/amanhecer.png'
    }else if ( hora >=12 && hora < 18){
        img.src = 'image/tarde.png'
    }else{
        img.src = 'image/noite.png'
    }

}
