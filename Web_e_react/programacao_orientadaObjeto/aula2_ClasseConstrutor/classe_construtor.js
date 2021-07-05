class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa('Eduarda', 22);
pessoa1.idade = 23;
console.log(pessoa1)

const pessoa2 = new Pessoa ('Murilo', 23);

const pessoa3 = new Pessoa ('Luisa', 28);

console.log(pessoa2);

console.log(pessoa3);

/* Classe são forma de definir as entidades no sistema. Elas
são estruturas capazes de dar origem a infinitos objetos de mesmo
tipo.

CRIAR UMA CLASSE:

class <nimedaclasse>{

}

Os aspectos mais relevantes de uma classe é o método construtos, onde indicaremos quais
são os atributos que a classe possui e quais são os valores necessáios que precisamm ser
definidor no momento da criação do objeto.

A classe é semelhante a uma "planta baixa" que determina a estrutura e os comportamentos
dos objetos criados por ela. Uma classe Pessoa pode indicar que todo objeto tenha um nome,
mas não pode indicar qual é esse nome, pois ele se´ra diferente para cada objeto Pessoa
criado por ela.

Para criar a classe Pessoa, com nome e idade, as informações necessárias devem ser passadas
por parâmetros no construtor e atribuída em atributos precedidos por this. .

É muito recomendado sempre iniciar nimes de classes com letra maiúscula. Além de manter o 
código mais organizado, facilita a leitura e entendimento uma vez que cria uma distinção clara 
entre as classes e variáveis.
*/