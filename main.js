const form = document.getElementById('formCadastro')

let linhas =  ''
let nomes = []
let numeros = []



form.addEventListener('submit', function(e){
    e.preventDefault()
    
    addLinha()
    atualizarTab()

    console.log(nomes)
    console.log(numeros)

})

function addLinha(){
    const inputNomeCompleto = document.getElementById('nomeCompleto')
    const inputNumero = (document.getElementById('numero'))
    
    if (nomes.includes(inputNomeCompleto.value) ){
        alert(`Nome ${inputNomeCompleto.value} já foi cadastrado`)
        inputNomeCompleto.value = ' '
        inputNumero.value = ' '
    
    } else if (numeros.includes(inputNumero.value) ) {
        alert(`Nome ${inputNumero.value} já foi cadastrado`)
        inputNomeCompleto.value = ' '
        inputNumero.value = ' '
    
    } else {
    
    let linha = '<tr>'
        linha += `<th>${inputNomeCompleto.value}</th>`
        linha += `<th>${inputNumero.value}</th>`
        linha += '</tr>'
        linhas += linha

    nomes.push (inputNomeCompleto.value)
    numeros.push (inputNumero.value)
        
    inputNomeCompleto.value = ' '
        inputNumero.value = ' '
    }
}

function atualizarTab(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}


