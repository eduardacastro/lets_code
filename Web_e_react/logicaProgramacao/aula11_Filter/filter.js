const vetor = [1,2,3,4,5,6,7,8,9,10];

const pares = vetor.filter(x => x%2 === 0);

console.log(pares);

/* Filter retorna um boolenao
Se a resposta for V eo elemento será mantido,
senão retirado. 
*/


const vetor2 = vetor.filter(x => x < 8);
console.log(vetor2)