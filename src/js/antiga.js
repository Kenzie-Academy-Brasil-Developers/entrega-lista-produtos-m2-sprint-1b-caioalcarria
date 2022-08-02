let listaDeProdutos = document.querySelector('.containerListaProdutos ul')
function criarProduto(img, name, price, section ) {
    listaDeProdutos.insertAdjacentHTML("afterbegin", `
    <li>
        <img src="${img}" alt="Imagem produto">
        <h3>${name}</h3>
        <span>${section}</span>
        <p>R$ ${price}.00</p>
        <button class="addCart"> Adicionar ao carrinho </button>
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
    categoria = categoria.toLowerCase()
    let newData = produtos.filter(elemento =>  elemento.secao == categoria )
    if(newData.length ==0){
        newData = produtos.filter(elemento =>  elemento.nome == categoria )
    }
    GerarProdutos(newData)
    if (categoria=="todos produtos"){
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


let input = document.querySelector(".filtersContainer .containerBuscaPorNome input")
let buscar = document.querySelector(".filtersContainer .containerBuscaPorNome button")




console.log(input)
buscar.addEventListener("click", test)

function test(x) {
    
        listaDeProdutos.innerHTML = "";
        // //RECEBENDO O VALOR DO USUÁRIO
        let pesquisaUsuario = input.value
        

        //PASSANDO PARA FAZER A BUSCA 
         filtrar(pesquisaUsuario)

        
    
}


















































let listaDeProdutos = document.querySelector('.containerListaProdutos ul')
function criarProduto(img, name, price, section ) {
    listaDeProdutos.insertAdjacentHTML("afterbegin", `
    <li>
        <img src="${img}" alt="Imagem produto">
        <h3>${name}</h3>
        <span>${section}</span>
        <p>R$ ${price}.00</p>
        <button class="addCart"> Adicionar ao carrinho </button>
    </li>`)
}



function GerarProdutos(lista){
    price=0
    for(i in lista){
        criarProduto(lista[i].img, lista[i].nome,lista[i].preco, lista[i].secao)
        price=price+lista[i].preco
    }
    totalPrice(price)
}

function totalPrice(price) {
    let total = document.querySelector('.priceContainer span')
    total.innerHTML = `R$ ${price}.00`
}










function filtrar(categoria) {
    categoria = categoria.toLowerCase()
    let newData = produtos.filter(elemento =>  elemento.secao == categoria )
    if(newData.length ==0){
        newData = produtos.filter(elemento =>  elemento.nome == categoria )
    }
    GerarProdutos(newData)
    if (categoria=="todos produtos"){
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


let input = document.querySelector(".filtersContainer .containerBuscaPorNome input")
let buscar = document.querySelector(".filtersContainer .containerBuscaPorNome button")




console.log(input)
buscar.addEventListener("click", test)

function test(x) {
    
        listaDeProdutos.innerHTML = "";
        // //RECEBENDO O VALOR DO USUÁRIO
        let pesquisaUsuario = input.value
        

        //PASSANDO PARA FAZER A BUSCA 
         filtrar(pesquisaUsuario)

        
    
}