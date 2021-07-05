 const subtrair = (a,b) => a-b;
 const aplicaOperacao = (a,b, operação) => operação(a,b);

 let resultado = aplicaOperacao (4,2,subtrair);

 console.log(resultado);

 //

 const somarX = (x) => (y) => x+y;

 const somar2 = somarX(2);

 console.log(somar2(5))

 /* Funçao de Alta Ordem:
é uma função que recebe ou retorna uma função.
*/

