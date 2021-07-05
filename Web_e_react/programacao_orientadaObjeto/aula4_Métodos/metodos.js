class Quadrado {
    constructor(base, altura){
        if (isNaN (base) || isNaN (altura)) throw "ERRO! Informação não numérica!";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
    calculaArea (){
        return this.base*this.altura;
    }

    duplicaBase(){
        this.base = this.base*2;
    }

    imprimir (){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
}

const quadrado = new Quadrado (11,12);
console.log(quadrado.duplicaBase())
console.log(quadrado.calculaArea());

/*
MÉTODOS 

Métodos são computacionalmente identicos às funções. Chamamos de métodos e não 
funções por dois motivos:

    1. Por estar no contexto POO e no interior de uma classe.
    2. Por ele poder manipular o estado interno de um objeto.

Leia "estado" acima como o conjunto de valores dos atributos.

Para declarar um método em uma classe basta fazer, após o construtor, uma função sem
usar a palavra function usamos apenas o nome. Também não podemos usar arrow funtions
usamos apenas o nome. Também não podemos usar arrow functions nesse contexto por conta do mesmo problema com this.
que tivemos nos objetos.

Métodos podem ler ou alterar o estado ineterno do objeto, assim como podem fazer
qualquer computação com os valores dos atributos e até mesmo chamar outros métodos 
do mesmo objeto.

Alguns métodos podem até criar outros objetos ou funções, dependendo da necessidade. 
Alguns padrões como factory dependem dessa capacidade. Imagine por exemplo uma classe
de configurações onde vocÊ coloca vários dados e no final ela te devolve uma função que
abre uma conexão com um banco de dados usando os dados fornecidos.

No entanto, se métodos estiverem fazendo computações independentes de quanquer informação
pertencente ao objeto, existe grandes chances de que eles estejam no lugar errado.
Nesse casom eles poderíam estar em outro objeto ou no próprio script como uma função.
*/