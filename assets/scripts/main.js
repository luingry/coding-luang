//Função
//Função apresenta return;
function somaFuncao(numero1, numero2) {
    var resultado = numero1 + numero2;
    return resultado;
}   

//Método
//Método não apresenta return.
function somaMetodo(numero1, numero2) {
    var resultado = numero1 + numero2;
    console.log(resultado);
}

//Objetos
var usuario = {
    nome: "Luang",
    idade: 17,
    tamanho: 178,
    sexo: "feminino",
    verificaIdade:function verificaMaioridade(idade) {
        //Exemplos de função com condicional
        if (idade >= 18) {
            //Se for verdade
            console.log("Usuário é maior de 18");
        } else {
            //Se for mentira
            console.log("Usuário é menor de 18");
        }
    }
};

//Implementando parallax

//Selecionando elemento DOM
var imgDomElement = document.querySelector(".banner_main .banner-img");
var headerElement = document.querySelector("header");

document.addEventListener("scroll", function (){
    var topValue = imgDomElement.getBoundingClientRect().top;
    var pageScroll = document.querySelector('body').scrollTop;
    var scrollValue = (pageScroll)*.60;
    imgDomElement.style = `top: ${scrollValue}px`;

    if(pageScroll > 0) {
        if (!headerElement.classList.contains('scrollado')) headerElement.classList = headerElement.classList + " scrollado";
    } else {
        headerElement.classList.remove("scrollado");
    }
})






