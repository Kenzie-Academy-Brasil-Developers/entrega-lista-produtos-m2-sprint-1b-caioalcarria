function gerarCards(arr) {
    let ProdutosHTML = document.querySelector('.containerListaProdutos ul')
    ProdutosHTML.innerHTML=""
    arr.forEach((elem) => {
        const {img, nome, secao, preco} = elem
        ProdutosHTML.insertAdjacentHTML("afterbegin", `
            <li>
                <img src="${img}" alt="Imagem produto">
                <h3>${nome}</h3>
                <span>${secao}</span>
                <p>R$ ${ preco }.00</p>
                <button class="addCart"> Comprar </button>
            </li>`)
    });
    
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

