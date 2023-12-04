import { ListadeProdutos } from "./dados.js" // importa o catalogo de produtos
import { carregaProdutos, cartIndicator, handleClick} from "./funcoes.js"; // importa as funcoes que serao executadas na pagina home

//let listaCompras = JSON.parse(localStorage.getItem("carrinho"))

let weddingProducts = ListadeProdutos.filter(produto => produto.categoria === "VELAS")

 // lista de produtos filtrada pela categoria home
let container = document.querySelector(".produto-novidade") // Seleção do local onde o codigo HTML sera injetado

// função recebe uma lista de produtos e o local onde o HTML será injetado, que será exibida nas paginas
// cartIndicator(listaCompras)
carregaProdutos(weddingProducts,container);
handleClick() // adiciona o click nos cards de produto

// let indicator = document.querySelector(".cart-item-qtd")
// if (listaCompras == null || listaCompras.length == 0 ) {
//     indicator.innerHTML = 0
// } else {
//     indicator.innerHTML = listaCompras.length
//     indicator.classList.add("show")
// }