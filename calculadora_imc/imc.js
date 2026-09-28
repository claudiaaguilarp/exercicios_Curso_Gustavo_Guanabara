function calcular(){
    let peso = document.getElementById('peso')
    let altura = document.getElementById('altura')
    let result_imc = document.getElementById('imc_res')
    let dados = document.getElementById('erro')
    let faixa_imc = document.getElementById('faixa')
    let mens = document.getElementById('mensagem')
    dados.innerHTML = ''
    let alturaM = Number(altura.value/100)
    let imc = Number(peso.value / (alturaM *alturaM))

    if(peso.value.length == 0 || altura.value.length == 0){
        dados.innerHTML = 'Favor informar peso e altura!'
        dados.style.color = '#E74C3C'
    }else{
         result_imc.innerHTML = imc.toFixed(1)
         if(imc <18.5){
            result_imc.style.color = '#F1C40F'
            faixa_imc.innerHTML = 'Baixo Peso'
            faixa_imc.style.color = '#F1C40F'
            faixa_imc.style.fontWeight = 'bold'
            mens.innerHTML = 'Abaixo do peso ideal. Recomenda-se um acompanhamento nutricional.'
         }else if(imc < 24.9){
            result_imc.style.color = '#2ECC71'
            faixa_imc.innerHTML = 'Normal'
            faixa_imc.style.color = '#2ECC71'
            faixa_imc.style.fontWeight = 'bold'
            mens.innerHTML = 'Peso saudável! Mantém os teus hábitos de vida ativos e equilibrados.'
         }else if(imc < 29.9){
            result_imc.style.color = '#E67E22'
            faixa_imc.innerHTML = 'Sobrepeso'
            faixa_imc.style.color = '#E67E22'
            faixa_imc.style.fontWeight = 'bold'
            mens.innerHTML = 'Ligeiramente acima do peso. Considera rever a alimentação e praticar exercício.'
         }else{
            result_imc.style.color = '#E74C3C'
            faixa_imc.innerHTML = 'Sobrepeso'
            faixa_imc.style.color = '#E74C3C'
            faixa_imc.style.fontWeight = 'bold'
            mens.innerHTML = 'Acima do peso recomendado. É aconselhável consultar um profissional de saúde."'

         }

    }
}
