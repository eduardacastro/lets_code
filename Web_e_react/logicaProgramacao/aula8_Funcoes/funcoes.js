function escreva (texto){
    console.log(texto);
}


escreva('Meu primeiro');

escreva('A pepper é linda');

// USANDO FUNCTION

function somar(a,b){
    return a+b;
}

let resultado = somar(1,3);
console.log(resultado);

//

function somar(a,b){
    return a+b;
}

// ATRIBUINDO UMA FUNÇÃO ANÔNIA EM CONSTANTES

const soma = function(a,b){return a+b};

console.log(soma(1,5));

// ATRIBUINDO UMA FUNÇÃO DE 'FLECHA' EM CONSTANTES:

const sum = (a,b) => a+b;

console.log(sum(7,4));