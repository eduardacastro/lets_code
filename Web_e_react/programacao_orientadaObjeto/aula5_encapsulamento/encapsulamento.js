// Negar ascesso de leitura ou classe 
/*
function criaQuadrado (base, altura){
    let cor = 'blue';

    return {
        base,
        altura,
        getCor: function(){ return cor;}
    };
}

const quadrado = criaQuadrado(3,4);
console.log (quadrado.getCor());
*/

class Quadrado{
    constructor(lado,altura){
        let cor = 'red';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
}

const quadrado = new Quadrado (3,4);
console.log(quadrado.getCor());

/* Encapsulamento 

É o conceito de negar o acesso aos atributos de uma classe diretamente, seja
para leitura ou escrits. A maioria das linguagens orientadas a objetos utilizam algum comando
como private por exemplo para restringir esse acesso

Podemos utilizar o conhecimento em funções para realizar coisas nas classes que suprem a ausência
de alguns conceitos. Por exemplo, variáveis dentro de funções não são acessíveis de fora da dunção,
então poderíamos fazer encapsulamento usando elas.

exemplo:

    function Quadrado(base, altura){
    this.base = base;
    this.altura = altura;
    let cor = 'blue';
    }

    const quadrado = new Quadrado(3,4);

    console.log(quadrado);
    //Quadrado { base: 3, altura: 4 }
    console.log(quadrado.cor);
    //undefined
    quadrado.cor = 'red';
    //não altera cor dentro do quadrado

Aqui usamos let no lugar de this. para indicar que a cor é uma informação privada
da classe Quadrado, de forma que ela não está acessível para leitura ou alterção 
de fora dessa classe.

Também podemos usar um factory function, uma função que cria um objeto, para 
encapsular informações seria assim:


    function createQuadrado(base, altura){

    let cor = 'blue';

    return {
        base,
        altura,
        getCor : function() { return cor; }
    };

    }

    const quadrado = createQuadrado(3,4);
    console.log(quadrado);
    //{ base: 3, altura: 4, getCor: [Function: getCor] }
    console.log(quadrado.cor);
    //undefined
    quadrado.cor = 'red';
    console.log(quadrado.cor);
    //red
    console.log(quadrado.getCor());
    //blue


Criamos uma função que constrói e retorna um objeto. essa função tem uma variável
interna chamada cor, que contém o valor 'blue' e passamos por parâmetros o valor da base
e da altura.

Em seguida retornamos um objeto contendo a base e a alturma, mas não a cor. Fizemos um
método que lê o valor privado da cor e o retorna.

Observe que quando tentamos usar quadrado.cor ele diz undefined. Pois não há cor no
quadrado.

Quando usamos quadrado.cor = 'red' isso não alterou a cor do quadrado, o que aconteceu
é que ele inseriu um novo campo chamado cor no quadrado (que não tinha esse campo) como 
o valor 'red'. Observe que nossa função que lê a cor encapsulada ainda retorna 'blue'.

Muito cuidado com isso! Linguagens dinâmicas  como JavaScript ou Python, permitem a inserção
de novos atributos ou métodos em objetos pré-existentes. Isso torna erros de digitação 
particularmente problemáticos, porqur rm vez de trocar o valor de um atributo existente, criamos
um novo com o nome incorreto.

Quanto a sintaxe de classe, estuma-se que terá em um futuro próximo uma sintaxe usando # na frente 
de variáveis privadas. Hoje isso é suportado em alguns navegadores maiores mas ainda não 
está oficializado.

O que podemos fazer é no método construtor declarar uma variável como fizemos 
na factory function ainda:

    class Quadrado{
  
    constructor(lado, altura){
        let cor = 'blue';
        this.lado = lado;
        this.altura = altura;
        this.getCor = () => { return cor; };
    }
    }

    const quadrado = new Quadrado(3,4);
    console.log(quadrado);
    //Quadrado { lado: 3, altura: 4, getCor: [Function], setCor: [Function] }
    console.log(quadrado.getCor());
    //blue
    quadrado.cor = 'red'; //errado! cria um atributo cor a mais no objeto!
    console.log(quadrado.cor);
    //red
    console.log(quadrado.getCor());
    //blue

O problema dessa técnica é que o escopo 'cor' na classe é apenas o do construtor, isso
nos obriga a declarar todos od métodos que precisam de acesso à 'cor' dentro do construtor.
Não podemos nesse caso usar a sintaxe comum de métodos que usamos na aula anterior.

Quando o encapsulamento complica mais do que ajuda, podemos recorrer a uma outra técnica, 
que é padronixar o acesso aso valores dos atributos de forma que voltamos a ter o controle
sobre atribuições e leituras, como fazíamos com os valores vindos dos parâmetros do construtor.

Para isso usaremos um conceito chamado em algumas linguagens de métodos de acesso, ou propriedades, 
ou como chamamos no JavaScript "Acccessors".