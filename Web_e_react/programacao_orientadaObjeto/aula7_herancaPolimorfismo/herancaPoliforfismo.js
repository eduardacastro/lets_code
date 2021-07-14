class Pessoa {
    constructor (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, rg, cpf){
        super( nome, idade);
        this.rg = rg;
        this.cpf = cpf;
    }
}


const cidadao = new Cidadao ('Eduarda', 22 , '5106192874', '01982876239');
console.log(cidadao instanceof Cidadao);
