// Desafio 1
function compareTrue(p1,p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(5 , 2));

// Desafio 3
function splitSentence(string) {
 let conjunto = [];
  for (let i = 0 ; i < string.length ; i += 1) {
    if (string[i] !== ' ' ) {
      conjunto.push(string[i]);
    } else {
      string[i] = " , ";
      conjunto.push(string[i]);   
    }
    return conjunto;
  }
} 
console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(lista) {  
  return lista[lista.length -1] + ", " + lista[0];
  }
console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins , ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}
console.log(footballPoints(0 , 0));

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0] ;
  let quantidade = 0;
  for (let i = 0 ; i < numeros.length ; i+=1){
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }; for (let i = 0 ; i < numeros.length ; i+=1) {
    if ( maiorNumero === numeros[i]) {
      quantidade += 1;
    }
  }
  return quantidade;
}
console.log(highestCount([-2 ,-2 ,-1]));
  

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
