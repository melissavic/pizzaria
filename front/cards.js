'use strict'

const teste = {
    "produtos": [
        {
            "id": 49,
            "nome": "Atum",
            "preco": "42,80"
        },
        {
            "id": 48,
            "nome": "Produto teste",
            "preco": "38,80"
        },
        {
            "id": 47,
            "nome": "Pizza Morango com chocolate",
            "preco": "38,80"
        },
        {
            "id": 46,
            "nome": "Pizza Romeu e Julieta",
            "preco": "38,80"
        },
        {
            "id": 45,
            "nome": "Pizza Prestígio",
            "preco": "38,80"
        },
        {
            "id": 44,
            "nome": "Pizza Beijinho",
            "preco": "38,80"
        },
        {
            "id": 43,
            "nome": "Pizza Banana",
            "preco": "38,80"
        },
        {
            "id": 42,
            "nome": "Pizza Pepperoni",
            "preco": "43,50"
        },
        {
            "id": 41,
            "nome": "Pizza Portuguesa",
            "preco": "48,90"
        },
        {
            "id": 40,
            "nome": "Pizza Bauru",
            "preco": "42,80"
        },
        {
            "id": 39,
            "nome": "Pizza Marguerita",
            "preco": "43,80"
        },
        {
            "id": 38,
            "nome": "Pizza Siciliana",
            "preco": "44,90"
        },
        {
            "id": 37,
            "nome": "Pizza Quatro Queijos",
            "preco": "42,90"
        },
        {
            "id": 36,
            "nome": "Pizza Tocasna",
            "preco": "43,50"
        },
        {
            "id": 35,
            "nome": "Pizza Frango Catupiry",
            "preco": "45,90"
        },
        {
            "id": 34,
            "nome": "Pizza Mussarela",
            "preco": "42,90"
        },
        {
            "id": 33,
            "nome": "Pizza Calabresa",
            "preco": "42,90"
        },
        {
            "id": 32,
            "nome": "Caipirinha abacaxi",
            "preco": "14,00"
        },
        {
            "id": 31,
            "nome": "Caipirinha morango",
            "preco": "14,00"
        },
        {
            "id": 30,
            "nome": "Caipirinha kiwi",
            "preco": "14,00"
        },
        {
            "id": 29,
            "nome": "Caipirinha limão",
            "preco": "14,00"
        },
        {
            "id": 28,
            "nome": "Brahma",
            "preco": "4,35"
        },
        {
            "id": 27,
            "nome": "Skol",
            "preco": "4,35"
        },
        {
            "id": 26,
            "nome": "Heineken",
            "preco": "5,00"
        },
        {
            "id": 25,
            "nome": "Heineken",
            "preco": "9,80"
        },
        {
            "id": 24,
            "nome": "Brahma",
            "preco": "9,00"
        },
        {
            "id": 23,
            "nome": "Skol",
            "preco": "9,00"
        },
        {
            "id": 22,
            "nome": "Água sem gás",
            "preco": "4,50"
        },
        {
            "id": 21,
            "nome": "Água com gás",
            "preco": "4,50"
        },
        {
            "id": 20,
            "nome": "Suco Limão",
            "preco": "9,00"
        },
        {
            "id": 19,
            "nome": "Suco Maracujá",
            "preco": "9,00"
        },
        {
            "id": 18,
            "nome": "Suco Abacaxi",
            "preco": "9,00"
        },
        {
            "id": 17,
            "nome": "Suco Laranja",
            "preco": "9,00"
        },
        {
            "id": 16,
            "nome": "H20 limoneto",
            "preco": "7,00"
        },
        {
            "id": 15,
            "nome": "H20 limão e laranja",
            "preco": "7,00"
        },
        {
            "id": 14,
            "nome": "H20 limão e maça",
            "preco": "7,00"
        },
        {
            "id": 13,
            "nome": "H20 limão",
            "preco": "7,00"
        },
        {
            "id": 12,
            "nome": "Soda",
            "preco": "11,00"
        },
        {
            "id": 11,
            "nome": "Pepsi",
            "preco": "12,00"
        },
        {
            "id": 10,
            "nome": "Sukita Laranja",
            "preco": "10,00"
        },
        {
            "id": 9,
            "nome": "Guaraná",
            "preco": "10,00"
        },
        {
            "id": 8,
            "nome": "Guaraná",
            "preco": "9,00"
        },
        {
            "id": 7,
            "nome": "Coca Cola",
            "preco": "11,00"
        },
        {
            "id": 6,
            "nome": "Fanta Laranja",
            "preco": "9,00"
        },
        {
            "id": 5,
            "nome": "Fanta Laranja",
            "preco": "6,00"
        },
        {
            "id": 4,
            "nome": "Guaraná",
            "preco": "6,00"
        },
        {
            "id": 3,
            "nome": "Coca-Cola Zero",
            "preco": "7,00"
        },
        {
            "id": 2,
            "nome": "Coca-Cola",
            "preco": "7,00"
        },
        {
            "id": 1,
            "nome": "Sprite",
            "preco": "6,00"
        }
    ]
}



//const createCard = (dados) => {

   // const infosImg = document.createElement("div")
    //infosImg.classList.add("infos-img")

   // const infos = document.createElement("div")
   // div.classList.add("card")
  //  div.id = `${dados.produto}${dados.id}${dados.nome}${dados.preco}`

  //  const ul = document.createElement("ul")
  //  const liNome = document.createElement("li")
   // const liPreco = document.createElement("li")

   // ul.appendChild(liNome)
   // ul.appendChild(liPreco)
//}

const createCard = function (array) {

    const divNomes = document.createElement('div')
    divNomes.classList.add('div-nome')
    
    const a = document.createElement('a')
    a.href = "#"

    divNomes.appendChild(a)
    divNomes.appendChild(div)
    return divNomes

}
'use strict'

const promocoes = 
    {
        "promocoes": [
            {
                "id": 5,
                "prazo": "2023-01-01T00:00:00.000Z",
                "nome": "Pague duas, leve três",
                "descricao": "Na compra de duas pizzas salgadas, ganhe uma doce."
            },
            {
                "id": 4,
                "prazo": "2023-01-01T00:00:00.000Z",
                "nome": "Desconto na primeira conta",
                "descricao": "Ganhe 10% de desconto na sua primeira compra."
            },
            {
                "id": 3,
                "prazo": "2023-01-01T00:00:00.000Z",
                "nome": "Duas pizzas e Refrigerante",
                "descricao": "Na compra de uma pizza salgada e uma doce, ganhe um refrigerante dois litros."
            },
            {
                "id": 2,
                "prazo": "2023-01-01T00:00:00.000Z",
                "nome": "Frete Grátis",
                "descricao": "Em compras acima de R$85,00, ganhe frete grátis"
            }
        ]
    }
console.log(promocoes)

    const criarCard = (dados) => {

        const ul = document.querySelector('ul')
        const liDescricao = document.createElement('li')
        const p = document.createElement('p')
        const div = document.createElement('div')

        p.textContent = dados.nome
        liDescricao = dados.descricao

        ul.appendChild(liNome)
        ul.appendChild(liDescricao)
        ul.appendChild('div')

        
    }
    return createCard



function menuShow(){
    let menuMobile = document.querySelector('.mobile.menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/menu_icon_png";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/close_white_36dp.svg";

        

    }
}

'use strict'

const testeIngrediente = 

{
    "ingrediente": [
        {
            "id": 17,
            "nome": "TESTE",
            "acompanhamentos": "tst"
        },
        {
            "id": 16,
            "nome": "Morango com chocolate",
            "acompanhamentos": "Chocolate coberto com morango."
        },
        {
            "id": 15,
            "nome": "Romeu e Julieta",
            "acompanhamentos": "Goiabada com mussarela ou catupiry."
        },
        {
            "id": 14,
            "nome": "Prestígio",
            "acompanhamentos": "Brigadeiro tradicional e coco ralado."
        },
        {
            "id": 13,
            "nome": "Beijinho",
            "acompanhamentos": "Mussarela, leite condensado, coco e chocolate branco."
        },
        {
            "id": 12,
            "nome": "Banana",
            "acompanhamentos": "Banana, açúcar com canela, flambado com rum e licor de cassis."
        },
        {
            "id": 11,
            "nome": "Pepperoni",
            "acompanhamentos": "Queji, oregano e pepperoni."
        },
        {
            "id": 10,
            "nome": "Portuguesa",
            "acompanhamentos": "Queijo, presunto, ovo de codorna, azeitona preta, cebola, oregano e pimentão verde."
        },
        {
            "id": 9,
            "nome": "Bauru",
            "acompanhamentos": "Queijo, presunto, requijão, oregano e tomate."
        },
        {
            "id": 8,
            "nome": "Calabresa",
            "acompanhamentos": "Calabresa, cebola e azeitonas roxas"
        },
        {
            "id": 7,
            "nome": "Frango com Catupiry",
            "acompanhamentos": "Frango desfiado coberto com catupiry"
        },
        {
            "id": 6,
            "nome": "Marguerita",
            "acompanhamentos": "Molho de tomate, muçarela, parmesão e manjericão."
        },
        {
            "id": 5,
            "nome": "Siciliana",
            "acompanhamentos": "Molho de tomate, calabresa, champignon, mussarela e orégano."
        },
        {
            "id": 4,
            "nome": "Quatro Queijos",
            "acompanhamentos": "Molho de tomate, mussarela, provolone, catupiry, parmesão e orégano."
        },
        {
            "id": 3,
            "nome": "Toscana",
            "acompanhamentos": "Molho de Tomate, calabresa, mussarela, vinagre e orégano"
        },
        {
            "id": 2,
            "nome": "Atum",
            "acompanhamentos": "Molho de tomate, muçarela, atum sólido, cebola roxa e orégano."
        },
        {
            "id": 1,
            "nome": "Mussarela",
            "acompanhamentos": "Queijo e Tomate"
        }
    ]
}

const Card = (dados) => {

    const ul = document.querySelector('ul')
    const liDescricao = document.createElement('li')
    const liPreco = document.createElement('li')
    const p = document.createElement('p')
    const div = document.createElement('div')

    p.textContent = dados.nome
    liDescricao = dados.acompanhamentos
    liPreco = dados.

    ul.appendChild(liDescricao)
    ul.appendChild(liPreco)
    div.appendChild(p)
    div.appendChild(ul)
}

 document.getElementById('button-salgadas').addEventListener('click', () => {



 })



//     const ul = document.querySelector('ul')
//     const li = document.createElement('li')
//     const h3 = document.createElement('h3')
//     const div = document.createElement('div')
//     div.classList.add('array-container')

//     let separar = item.split('-')
//     div.innerHTML= `
//         <h3>${separar[0]}</h3>
//         <li>${separar[1]}</li>
//         <backg
//     `
// }




