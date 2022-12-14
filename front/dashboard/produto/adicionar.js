const container = document.querySelector('.container-op')
const bebida = document.getElementById('bebida')
const pizza = document.getElementById('pizza')


const selectTipo = document.getElementById('dropdown-tipos')
let tipo = 0

const medio = document.querySelector('.input-produto')

const adicionarBebida = async( nome, ingredientes, tipo) => {

    const url = `http://localhost:8080/v1/`

    const produto = {
        
        nome: nome, 
        descricao: ingredientes,
        id_tipo_bebida: tipo
    
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-type': 'application/json'
        }
    }

    const result = await fetch(url, options)

    if (result) {
        return true
    } else{
        return false
    }

} 

const adicionarPizza = async (nome, ingredientes, tipo) => {
    const url = ``

    const produto = {
      
        nome: nome, 
        descricao: ingredientes,
        id_tipo_pizza: tipo 
      
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(produto),
        headers: {
            'content-type': 'application/json'
        }
    }

    const result = await fetch(url, options)

    if (result) {
        return true
    } else{
        return false
    }
}

const criarProduto = async () => {

    const formulario = document.getElementById('form')
    const nome = document.getElementById('nome').value
    const ingredientes = document.getElementById('ingredientes').value
  

    

    if (medioCheck.checked) {
        tamanho.push({id: medioCheck.id, preco: medio.value.replace(',', '.')})
    }

  

    if(formulario.reportValidity()){
        let result = false
        if (bebida.checked) {
            if (tipo == '') {
                tipo = 1
            }
 
            result = await adicionarBebida( nome, ingredientes, tipo)
        }
        else if (pizza.checked) {
            if (tipo == '') {
                tipo = 'Pizza doce'
            }
            result = await adicionarPizza( nome, ingredientes, tipo)
        }
        else{
            alert('Escolha se é pizza ou bebida')
            return false
        }


        if (result) {
            alert('Produto criado com sucesso')
            open('./dash.html', '_self')
        }else{
            alert('Não foi possível criar')
        }
    }


}

const getTipos = async (tipo) => {

    const url = ``

    const response = await fetch(url)

    const tipos = await response.json()

    return tipos
}



const createTipos = (data) => {

    const op = document.createElement('option')
    op.textContent = data.tipo
    op.id = data.id
    op.value = data.tipo

    return op
}

const loadTipos = async () => {

    const container = document.getElementById('dropdown-tipos')
    let tipo = ''

    if (bebida.checked) {
        tipo = 'bebida'
    } else{
        tipo = 'pizza'
    }

    const data = await getTipos(tipo)

    const cards = data.message.map(createTipos)

    container.replaceChildren(...cards)

}



const loadTamanhos = async () => {

    const container = document.getElementById('check')

    const data = await getTamanhos()

    const cards = data.message.map(createTamanhos)

    container.replaceChildren(...cards)

}



/*document.getElementById('enviar').addEventListener('click', criarProduto)
loadTamanhos()
loadTipos()*/

container.addEventListener('change', () => {
    if(bebida.checked){
        teorContainer.classList.remove('hide-input')
        teorContainer.classList.add('show-input')
    }
    if (pizza.checked) {
        teorContainer.classList.add('hide-input')
        teorContainer.classList.remove('show-input')
    }

    loadTipos()
})


selectTipo.addEventListener('change', () => {
    tipo = selectTipo.options[selectTipo.selectedIndex].id
})



let medioCheck = ''


document.getElementById('check').addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.classList.contains('label-op')) {

        produtoCheck = document.querySelector('.medio-op')

        console.log(produtoCheck)

        if (produtoCheck.checked) {
            produto.classList.remove('hide-input')
            produto.classList.add('show-input')
        } else{
            produto.classList.add('hide-input')
            produto.classList.remove('show-input')
            produto.value = null
        }

        
       
    }
})

