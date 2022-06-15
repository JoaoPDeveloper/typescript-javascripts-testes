var numeroSorteado = 10;

var tabuada = 7;

// for(var i = 0; i <= 10; i++){
//     console.log("valor de " + tabuada + " x " + i + ' = ' + tabuada * i);
// }

// for ( var i = 0; i< 100; i++) {
//     if (numeroSorteado === i) {
//         console.log('Seu numero foi encontrado!!')
//         break;
//     }
// }

// var achou = false;
// var numeroSorteado = 10;
// var possivelValor = 0;

// while(!achou){
//     possivelValor += 1;
//     if(numeroSorteado === possivelValor) {
//         achou = true;
//     }else{
//         console.log(
//             'Possivel valor não corresponde ao numero sorteado' + possivelValor
//             );
//     }
// }


function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama (nome) {
    console.log('Olá Gama! você é o ' + nome); 
}

var resultadoDaSoma = soma (1, 2);
var resultadoNovoDaSoma = soma(10, 66);


console.log(resultadoDaSoma);
console.log(resultadoNovoDaSoma);

olaGama('Joao');
