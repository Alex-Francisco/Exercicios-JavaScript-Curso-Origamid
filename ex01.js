// Crie uma função para verificar se um valor é Truthy

function verificarValor(x) {
    if (!!x) {
        return 'É true';
    } else {
        return 'É false';
    }
}

console.log(verificarValor(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(ladoA, ladoB, ladoC, ladoD) {
    var perimetro = ladoA + ladoB + ladoC + ladoD;
    return perimetro;
}

console.log(perimetroQuadrado(15, 5, 5, 5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

console.log('Alex', 'Francisco');

// Crie uma função que verifica se um número é par

function parImpar (num) {
    if (num % 2 == 0) {
        return 'É par';
    } else {
        return 'É ímpar';
    }
}

console.log(parImpar(11));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado (dado) {
    return typeof(dado);
}

console.log(tipoDeDado('texto'));
console.log(tipoDeDado(2));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
    console.log('Alex Francisco da Silva Souza')
})


// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));