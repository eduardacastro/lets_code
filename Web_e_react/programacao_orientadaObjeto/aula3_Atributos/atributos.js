class Quadrado{
    constructor(base, altura){
        if (isNaN(base) || isNaN(altura)) throw "ERRO! Informação não numérica";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const quadrado = new Quadrado (1, 2);
quadrado.cor = 'blue';
console.log(quadrado);