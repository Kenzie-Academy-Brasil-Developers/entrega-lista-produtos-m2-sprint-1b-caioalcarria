let listaDeProdutos = document.querySelector('.containerListaProdutos ul')
function criarProduto(img, name, price, section ) {
    listaDeProdutos.insertAdjacentHTML("afterbegin", `
    <li>
        <img src="${img}" alt="Imagem produto">
        <h3>${name}</h3>
        <span>${section}</span>
        <p>R$ ${price}.00</p>
    </li>`)
}

let total = document.querySelector('.priceContainer span')

function GerarProdutos(lista){
    final=0
    for(let i=0; i<lista.length;i++){
        criarProduto(lista[i].img, lista[i].nome,lista[i].preco, lista[i].secao)
        final=final+lista[i].preco
    }
    total.innerHTML = `R$ ${final}.00`
}

function filtrar(categoria) {
    let newData = produtos.filter(elemento =>  elemento.secao == categoria)
    
    GerarProdutos(newData)
    if (categoria=="Todos Produtos"){
        GerarProdutos(produtos)
    }
}


//*clicar

botao=document.querySelectorAll("button.estiloGeralBotoes.estiloGeralBotoes--filter")



botao.forEach(
    botao => botao.addEventListener('click',logId)
)

function logId(x) {
    //apagar tudo do meu ul
    if(listaDeProdutos.childElementCount>0){
        listaDeProdutos.innerHTML = "";
    }
    categoria = x.srcElement.innerText
    console.log(categoria)
    filtrar(categoria)
}

GerarProdutos(produtos)




















