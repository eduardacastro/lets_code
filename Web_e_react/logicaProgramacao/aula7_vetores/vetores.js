let vetor=[10,20,30,40,50,60];

console.log(vetor[2]);

vetor[2] = 90;
console.log(vetor[2]);

vetor[2]='Eduarda';
console.log(vetor[2]);

vetor[2] = false;
console.log(vetor[2]);

vetor = [];
for (let i=0; i<10; i++){
    vetor.push(i);
}
console.log(vetor);

for (let i = 0; i < vetor.length; i++){
    console.log(vetor[i]);
}

for (let numero of vetor){
    console.log(numero);
}

for ( let indice in vetor){
    console.log(vetor[indice]);
}

let matriz = [
    [ 1, 2, 3],
    [ 4, 5, 6],
    [ 7, 8, 9],
];

for (let linha of matriz){
    for (let elemento of linha) {
        console.log(elemento);
    }
}

/* Vetor: uma sequencia ordenada de valores (array)
vetores são heterogenios 

LAÇOS QUE PERMITEM PERCORRER O VETOR:

FOR-OF: receber um vetor e a variávek declarada vai possuir is valores
dos elementos do vetor. Assim percorre diretamente o array inteiro

FOR-IN: Onde a variavél declarada assume o valor dos índies do vetor passado

const vetor = [10,20,30,40,50];

for (let indice in vetor){
    console.lor(indice, vetor[indice]);
}

MATRIZES: Vetores multidimencionais 

VETORES DINÂMICOS:

-> Adicionar elemento ao  final do vetor:

    let vetpr = [10,11,12,13,14,15]
    let elemento_novo = 16;

    vetor.push(novo_elemento);

-> Para remover do final:
    let vetor = [11,12,13,14,15];
    vetor.pop();

-> Para adicionar no começo:
    let vetor = [11,12,13,14,15];
    let novo_elemento = 10;

    vetor.unshift(novo_elemento);

-> Para remover do começo:
    let vetor = [11,12,13,14,15];
    vetor.shift();
*/
