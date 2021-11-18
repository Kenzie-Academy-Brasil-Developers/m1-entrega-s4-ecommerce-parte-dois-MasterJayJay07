const vitrine = document.getElementById("vitrine")
const produtos = [{imagem:"./imagens/ACvalhallaps4.jpg", classe:"Playstation", nome:"AC Valhalla PS4", descricao:"Embarque numa aventura viking com Eivor, explorando e descobrindo segredos da Inglaterra no ano 873", preco:"R$150,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/ACvalhallaxbox.jpg", classe:"Xbox", nome:"AC Valhalla Xbox One", descricao:"Embarque numa aventura viking com Eivor, explorando e descobrindo segredos da Inglaterra no ano 873", preco:"R$122,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/thewitcherpc.jpg", classe:"PC", nome:"The Witcher 3: Wild Hunt PC", descricao:"Entre numa nova aventura com Geralt de Rivia em que o bruxo está atrás de sua pupila Siri que está sendo perseguida pela Caçada Selvagem", preco:"R$90,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/haloxbox.jpg", classe:"Xbox", nome:"Halo Xbox", descricao:"Viaje com Masterchief pelo espaço tentando impedir uma invasão alienígena que resultará na extinção da humanidade", preco:"R$200,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/godofwarps4.jpg", classe:"Playstation", nome:"God Of War PS4", descricao:"Kratos embarca numa nova jornada com seu filho Atreus tentando o ensinar a não cometer os erros que o deus da guerra cometeu no passado e lhe mostrar o melhor caminho", preco:"R$170,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/ac4pc.jpg", classe:"PC", nome:"AC 4 Black Flag PC", descricao:"Se torne um pirata na pele de Edward Kenway e navegue pelos mares do ano de 1715 durante a era de ouro da pirataria", preco:"R$110,00", adc:"Adicionar ao Carrinho"}
]
const cards= document.createElement("ul")
cards.classList.add("cards")
vitrine.appendChild(cards)
const filtroHeader = document.getElementsByClassName("filtroNav")
const listaCarrinho = document.getElementById("boxCarrinho")
const botaoPesquisar = document.getElementById("botaoPesquisar")
const input = document.getElementById("item")
let listaDeProdutos = []

//loop que está criando os produtos em tela da const produtos
for (let i=0; i<produtos.length; i++){
    let currentProduct = produtos[i]
    //pega conteúdo do objeto produtos//
    let {imagem, classe, nome, descricao, preco, adc}=currentProduct
    //cria as tags dos elementos
    const cardLi = document.createElement("li")
    const img = document.createElement("img")
    const h3 = document.createElement("h3")
    const h4 = document.createElement("h4")
    const paragrafo = document.createElement("p")
    const h5 = document.createElement("h5")
    const botaoAdcCarrinho = document.createElement("button")
    //cria o conteúdo de texto ou imagem para as tags
    img.src = imagem
    h3.innerText = classe
    h4.innerText = nome
    paragrafo.innerText = descricao
    h5.innerText = preco
    botaoAdcCarrinho.innerText = adc
    botaoAdcCarrinho.addEventListener("click", ()=>adicionarAoCarrinho(currentProduct))
    //adiciona os elementos/tags no elemento pai
    cardLi.appendChild(img)
    cardLi.appendChild(h3)
    cardLi.appendChild(h4)
    cardLi.appendChild(paragrafo)
    cardLi.appendChild(h5)
    cardLi.appendChild(botaoAdcCarrinho)
    cards.appendChild(cardLi)
    //adicionar classes em alguns elementos 
    botaoAdcCarrinho.classList.add("botaoAdcCarrinho")
    cardLi.classList.add("cardProdutos")
}

//função que filtra os elementos
function filtrar(indice) {
    let retorno = []
    for (let i=0; i<listaDeProdutos.length; i++){
        if(indice!==i){
            retorno.push(listaDeProdutos[i])
        }
    }
    listaDeProdutos = retorno
    showItens(listaDeProdutos)
}

//função mostrar objetos
function showItens(listaDeProdutos) {
    listaCarrinho.innerHTML = ""
    for (let i = 0; i < listaDeProdutos.length; i++) {
        let currentIten = listaDeProdutos[i]
        //criador de tags
        const li = document.createElement("li")
        const li2 = document.createElement("li")
        const img = document.createElement("img")
        const h6 = document.createElement("h6")
        const p = document.createElement("p")
        const buttonRemove = document.createElement("button")
        //classes adicionadas
        li.classList.add("itensRow")
        li2.classList.add("itensColumn")
        //conteúdo das tags
        img.src = currentIten.imagem
        h6.innerText = currentIten.nome
        p.innerText = currentIten.preco
        buttonRemove.innerText = "remover item"
        //conteúdos adicionados nas li
        li.appendChild(img)
        li2.appendChild(h6)
        li2.appendChild(p)
        li.appendChild(li2)
        buttonRemove.addEventListener("click", function() {
            return filtrar(i)
        })
        li2.appendChild(buttonRemove)
        listaCarrinho.appendChild(li)
    }
}

//função adicionar ao carrinho
function adicionarAoCarrinho(produto){
    listaDeProdutos.push(produto)
    showItens(listaDeProdutos)
    console.log(produto)
}

//funçõeso que filtram o nav pelo clique//
const cardProdutos = document.getElementsByClassName("cardProdutos")
filtroHeader[0].addEventListener("click", function(){
    for (let i=0; i<produtos.length; i++){
        cardProdutos[i].classList.remove("sumir")
    }
})
filtroHeader[1].addEventListener("click", function(){
    for (let i=0; i<produtos.length; i++){
        cardProdutos[i].classList.remove("sumir")
    }
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].classe!=="Playstation"){
            cardProdutos[i].classList.add("sumir")
        }
    }
})
filtroHeader[2].addEventListener("click", function(){
    for (let i=0; i<produtos.length; i++){
        cardProdutos[i].classList.remove("sumir")
    }
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].classe!=="Xbox"){
            cardProdutos[i].classList.add("sumir")
        }
    }
})
filtroHeader[3].addEventListener("click", function(){
    for (let i=0; i<produtos.length; i++){
        cardProdutos[i].classList.remove("sumir")
    }
    for(let i=0; i<produtos.length; i++){
        if(produtos[i].classe!=="PC"){
            cardProdutos[i].classList.add("sumir")
        }
    }
})

//função que filtra pelo nome
botaoPesquisar.addEventListener("click", function(){
    const inputValue = input.value.toLocaleLowerCase()
    for(let i=0; i<produtos.length; i++){
        cardProdutos[i].classList.remove("sumir")
    }
    for (let i=0; i<produtos.length; i++){
        let currentItem = produtos[i].nome.toLocaleLowerCase()
        if(currentItem.includes(inputValue)){
        }
        else {
            cardProdutos[i].classList.add("sumir")
        }
    }
})