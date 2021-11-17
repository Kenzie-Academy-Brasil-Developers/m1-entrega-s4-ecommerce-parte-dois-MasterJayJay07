const vitrine = document.getElementById("vitrine")
const produtos = [{imagem:"./imagens/ACvalhallaps4.jpg", classe:"Playstation", nome:"AC Valhalla PS4", descricao:"Embarque numa aventura viking com Eivor, explorando e descobrindo segredos da Inglaterra no ano 873", preco:"R$150,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/ACvalhallaxbox.jpg", classe:"Xbox", nome:"AC Valhalla Xbox One", descricao:"Embarque numa aventura viking com Eivor, explorando e descobrindo segredos da Inglaterra no ano 873", preco:"R$122,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/thewitcherpc.jpg", classe:"PC", nome:"The Witcher PC", descricao:"Entre numa nova aventura com Geralt de Rivia em que o bruxo está atrás de sua pupila Siri que está sendo perseguida pela Caçada Selvagem", preco:"R$90,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/haloxbox.jpg", classe:"Xbox", nome:"Halo Xbox", descricao:"Viaje com Masterchief pelo espaço tentando impedir uma invasão alienígena que resultará na extinção da humanidade", preco:"R$200,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/godofwarps4.jpg", classe:"Playstation", nome:"God Of War PS4", descricao:"Kratos embarca numa nova jornada com seu filho Atreus tentando o ensinar a não cometer os erros que o deus da guerra cometeu no passado e lhe mostrar o melhor caminho", preco:"R$170,00", adc:"Adicionar ao Carrinho"},
{imagem:"./imagens/ac4pc.jpg", classe:"PC", nome:"AC 4 Black Flag PC", descricao:"Se torne um pirata na pele de Edward Kenway e navegue pelos mares do ano de 1715 durante a era de ouro da pirataria", preco:"R$110,00", adc:"Adicionar ao Carrinho"}
]
const cards= document.createElement("ul")
cards.classList.add("cards")
vitrine.appendChild(cards)
const filtroHeader = document.getElementsByClassName("filtroNav")

//loop que está criando os produtos em tela da const produtos
for (let i=0; i<produtos.length; i++){
    let cardLi = document.createElement("li")
    cardLi.classList.add("cardProdutos")
    cards.appendChild(cardLi)
    //criar imagem item//
    let novaImagem = produtos[i].imagem
    let criarImagem = document.createElement("img")
    cardLi.appendChild(criarImagem)
    criarImagem.src = novaImagem
    //criar classe item//
    let novaClasse = produtos[i].classe
    let criarh3 = document.createElement("h3")
    cardLi.appendChild(criarh3)
    let textoh3 = document.createTextNode(novaClasse)
    criarh3.appendChild(textoh3)
    //criar nome do item//
    let novoNome = produtos[i].nome
    let criarh4 = document.createElement("h4")
    cardLi.appendChild(criarh4)
    let textoh4 = document.createTextNode(novoNome)
    criarh4.appendChild(textoh4)
    //criar descrição do item//
    let novaDescricao = produtos[i].descricao
    let criarParagrafo = document.createElement("p")
    cardLi.appendChild(criarParagrafo)
    let textoParagrafo = document.createTextNode(novaDescricao)
    criarParagrafo.appendChild(textoParagrafo)
    //criar preço do item //
    let novoPreco = produtos[i].preco
    let criarParagrafoPreco = document.createElement("h5")
    cardLi.appendChild(criarParagrafoPreco)
    let textoParagrafoPreco = document.createTextNode(novoPreco)
    criarParagrafoPreco.appendChild(textoParagrafoPreco)
    //criar tag adc ao carrinho//
    let novoBotaoAdc = produtos[i].adc
    let criarBotaoAdcCarrinho = document.createElement("button")
    criarBotaoAdcCarrinho.classList.add("botaoAdcCarrinho")
    cardLi.appendChild(criarBotaoAdcCarrinho)
    let textobotaoAdcCarrinho = document.createTextNode(novoBotaoAdc)
    criarBotaoAdcCarrinho.appendChild(textobotaoAdcCarrinho)
}

//função que filtra o nav pelo clique//
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

//botao adicionar ao carrinho//
const botaoAdcCarrinho = document.getElementsByClassName("botaoAdcCarrinho")
const boxCarrinho = document.getElementById("boxCarrinho")
for (let i=0; i<botaoAdcCarrinho.length; i++){
    botaoAdcCarrinho[i].addEventListener("click", function(){
        let newLi = document.createElement("li")
        boxCarrinho.appendChild(newLi)
        let newImg = document.createElement("img")
        newImg.src = produtos[i].imagem
        newLi.appendChild(newImg)
        let newName = document.createElement("h5")
        newName.innerHTML = produtos[i].nome
        newLi.appendChild(newName)
        let newPrice = document.createElement("h6")
        newPrice.innerHTML = produtos[i].preco
        newLi.appendChild(newPrice)
        let newButtonRemove = document.createElement("button")
        newButtonRemove.innerHTML = "remover produto"
        newButtonRemove.classList.add("botaoRemover")
        newLi.appendChild(newButtonRemove)
    })
}
const listaCarrinho = document.getElementsByClassName("listaCarrinho")
const botaoRemover = document.getElementsByClassName("botaoRemover")

for (let i=0; i<botaoRemover.length; i++){
    botaoRemover[i].addEventListener("click", function(){
    console.log("tá osso")
    })
}