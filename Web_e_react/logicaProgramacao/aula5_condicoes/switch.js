let sinal = 'amarelo';

switch (sinal) {
    case 'verde':
        console.log('Pode passar');
        break;
    case 'amarelo':
        console.log('Prestes a fechar, cuidado...');
        break;
    case 'vermelho':
        console.log('Fechado, não passe');
        break;
    default:
        console.log('Inválido');
}

/* Truthy e Falsy:

exemplos que o JavaScript interpreta como falso:
    0
    "ou"
    null
    undefinef
    NaN
exemplos que o JavaScript interpreta como verdadeiro:
    []
    {}
    function(){}*/