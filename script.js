let num = window.document.getElementById('txtint')
let lista = window.document.getElementById('painel')
let res = document.querySelector('div#res')
let array = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
        }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){  
    if (isNumero(num.value) && !inLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')//adicionando item na lista de for ma dinamica
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML =''
    } else {
        window.alert('valor invalido')
    } 
    num.value =''
num.focus() // deixar o cursor piscando
}

function finalizar(){
  if(array.length ==0){
    alert('Adicionar uma valor para finalizar!')
  }else{
    let tot = array.length
    let maior =  array[0]
    let menor = array[0]
    let soma=0
    let media = 0

    for(let pos in array){
        soma += array[pos]
        if(array[pos]>maior){
            maior = array[pos]
        }
        if(array[pos]< menor){
            menor = array[pos]
        }
    }

    media = soma/ tot
    res.innerHTML =''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
    res.innerHTML += `<p>O maior  valor informado foi ${maior}. </p>`
    res.innerHTML += `<p>O menor  valor informado foi ${menor} </p>`
    res.innerHTML += `<p>A soma de todos os valor: ${soma} </p>`
    res.innerHTML += `<p>A média dos valores digitados: ${media} </p>`  
  }
}