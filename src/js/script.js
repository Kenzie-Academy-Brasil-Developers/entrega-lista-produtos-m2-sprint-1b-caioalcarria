function gerarCards(arr) {
    let ProdutosHTML = document.querySelector('.containerListaProdutos ul')
    ProdutosHTML.innerHTML=""
   
    arr.forEach((elem) => {
        const {img, nome, secao, preco, componentes} = elem
        ProdutosHTML.insertAdjacentHTML("afterbegin", `
            <li>
                <img src="${img}" alt="Imagem produto">
                <h3>${nome}</h3>
                <p>${componentes.join(', ')}</p>
                <span>${secao}</span>
                <div class="addCartDiv">
                    <p>R$ ${ preco }.00</p>
                    <button class="addCart"> Comprar </button>
                </div>
            </li>`)
    });

    addCart(document.querySelectorAll('.containerListaProdutos ul li'))
}

function addCards() {
    filtarProdutos('todos produtos')
}
addCards()
function filtarProdutos(value) {
    let arr=[]
    value.toLowerCase()
    produtos.forEach(elem => {
        let filter = []
        const{nome, secao, categoria, componentes} = elem
        filter.push(nome,categoria,...componentes,secao, "todos produtos")
        filter= filter.map(Element => Element.toLowerCase())

        if(filter.includes(value)==true){
            arr.push(elem)
        }
    });
    gerarCards(arr)
}

function section() {
    let buttonSecao = document.querySelectorAll('#botoesContainer button')
    buttonSecao.forEach(buttonSecao => buttonSecao.addEventListener('click', function (){
        filtarProdutos(buttonSecao.attributes.id.value)
    })
        
    );
}
section()


function buscar() {
    let input = document.querySelector(".filtersContainer .containerBuscaPorNome input")
    let buscar = document.querySelector(".filtersContainer .containerBuscaPorNome button")
    buscar.addEventListener("click", function () {
        let pesquisaUsuario = input.value
        filtarProdutos(pesquisaUsuario)
    })
    input.addEventListener("keyup", function(event){
    
    
        if( event.keyCode == 13){
            let pesquisaUsuario = input.value
            filtarProdutos(pesquisaUsuario)
        }})
}
buscar()

function gerarCart(elem) {
    listCart = document.querySelector('.listOfProducts')
        const {img, nome, secao, preco} = elem
        listCart.insertAdjacentHTML("afterbegin", `
                <div class="cartProduct">
                    <div class="containerCart">
                        <img class="itemPicture" src="${img}" alt="">
                        <div class="info">
                            <h3 class="title">${nome}</h3>
                            <p class="secao">${secao}</p>
                            <strong class="price" id= "${preco}">R$ ${preco},00</strong>
                        </div>
                    </div>
                    <img src="./src/img/trash.jpg" alt="" class="trash">
                </div>
        `)
    removeCart(document.querySelectorAll('.trash'))
    quantidadeAndTotal(document.querySelectorAll('.price'))
    
}

function addCart(params) {
    let butoonAddCart= params //chamar como parametro da função lá em cima
    butoonAddCart.forEach(butoonAddCart => butoonAddCart.addEventListener('click',function () {
                item = butoonAddCart.children[1].textContent
                produtos.forEach(elem => {
                    const {nome}=elem
                    if(nome == item){
                        gerarCart(elem)
                    }
                });
    })
        
    );
}

addCart()

function removeCart(butoonRemoveCart) {
    butoonRemoveCart.forEach(butoonRemoveCart => butoonRemoveCart.addEventListener('click', function () {
        butoonRemoveCart.parentElement.remove()
        quantidadeAndTotal(document.querySelectorAll('.price'))
    }))
    
}
removeCart()

function quantidadeAndTotal(itens) {
    document.querySelector('.quantidade strong').innerHTML= `${itens.length}`
    let total=0
    itens.forEach(elem => {
        x = parseInt(elem.attributes.id.value)
        total=total+x
    });
    document.querySelector('.totalPrice p').innerHTML= `R$ ${total},00`
}


   