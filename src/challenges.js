// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(lista) {
  return `${lista[lista.length - 1]}, ${lista[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let quantidade = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  } for (let i = 0; i < numeros.length; i += 1) {
    if (maiorNumero === numeros[i]) {
      quantidade += 1;
    }
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(palavra) {
  let resultado = '';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] == 'a') {
      resultado += 1;
    } else if (palavra[i] == 'e') {
      resultado += 2;
    } else if (palavra[i] == 'i') {
      resultado += 3;
    } else if (palavra[i] == 'o') {
      resultado += 4;
    } else if (palavra[i] == 'u') {
      resultado += 5;
    } else {
      resultado += palavra[i];
    }
  }
  return resultado;
}
console.log(encode('bananana'));

function decode(palavra2) {
  let resultado = '';
  for (let i = 0; i < palavra2.length; i += 1) {
    if (palavra2[i] == 1) {
      resultado += 'a';
    } else if (palavra2[i] == 2) {
      resultado += 'e';
    } else if (palavra2[i] == 3) {
      resultado += 'i';
    } else if (palavra2[i] == 4) {
      resultado += 'o';
    } else if (palavra2[i] == 5) {
      resultado += 'u';
    } else {
      resultado += palavra2[i];
    }
  }
  return resultado;
}
console.log(decode('b1n1n1n1'));

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
