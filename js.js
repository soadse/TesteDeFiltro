let lista = []
let busca = ''

let inputNomesCadastro = document.getElementById('inputNomesCadastro')
let btnCadastro = document.getElementById('btnCadastro')

let inputNomesPesquisa = document.getElementById('inputNomesPesquisa')
let btnBusca = document.getElementById('btnBusca')

let btnMostrarLista = document.getElementById('btnMostrarLista')
let resultadoDeBusca = document.getElementById('resultadoDeBusca')

let btnLimpa = document.getElementById('btnLimpa')

inputNomesCadastro.addEventListener('click', () => {
    resultadoDeBusca.innerHTML = ''
})
inputNomesPesquisa.addEventListener('click', () => {
    resultadoDeBusca.innerHTML = ''
})

btnCadastro.addEventListener('click', () => {
    if(inputNomesCadastro.value === ''){
        resultadoDeBusca.innerHTML = 'Campo de cadastro vazio<br>Insira uma palavra'
    } else {
        lista.push(inputNomesCadastro.value)
        inputNomesCadastro.value = ''
    }
})

btnBusca.addEventListener('click', () => {
    if(lista.includes(inputNomesPesquisa.value)){
        resultadoDeBusca.innerHTML = `Palavra encontrada: ${inputNomesPesquisa.value}`
        inputNomesPesquisa.value = ''
    } else if(inputNomesPesquisa.value === '') {
        resultadoDeBusca.innerHTML = 'Campo de busca vazio<br>Insira uma palavra'
    } else {
        resultadoDeBusca.innerHTML = `Palavra não encontrada: ${inputNomesPesquisa.value}`
        inputNomesPesquisa.value = ''
    }
})

btnMostrarLista.addEventListener('click', () => {
    if(lista.length === 0){
        resultadoDeBusca.innerHTML = 'Lista vazia'
    } else {
        resultadoDeBusca.innerHTML = lista
    }
})

btnLimpa.addEventListener('click', () => {
    resultadoDeBusca.value = ''
    inputNomesCadastro.value = ''
    resultadoDeBusca.innerHTML = ''
    
})



// if(lista.includes(nome)){
//     div2.innerHTML = `Nome localizado: ${nome}`
// } else {
//     div2.innerHTML = `Nome não localizado: ${nome}`
// }
