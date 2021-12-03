// Desafio 10
function techList(array, name) {
    let array2 = [];
    let array1 = array.sort();
  for (let i = 0; i < array1.length; i += 1) {
      let tecnologia = {
        tech: array1[i],
        name: name,
      }
      array2.push(tecnologia);
    } 
    if (array2.length === 0) {
      return "Vazio!"
    } else {
        return array2.sort();
      }
 }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(numeros) {
    let contador = 0;
    let numero = 0;
  for (let i =0; i < numeros.length; i += 1) {
    numero = numeros[i];
        for (let j = 0; j < numeros.length; j += 1) {
          if (numero === numeros[j]) {
            contador += 1;
            console.log(numero);
            console.log(contador);
          }
          if (contador > 2) {
            return "não é possível gerar um número de telefone com esses valores";
          } else if (numeros.length > 11) {
             return "Array com tamanho incorreto."
            } else if (numeros[i] < 0 || numeros[i] > 9) {
              return "não é possível gerar um número de telefone com esses valores";
            } else {
                return "(" + numeros[0] + numeros[1] + ") " + numeros[2] + numeros[3] + numeros[4] + numeros[5] + numeros[6] + "-" + numeros[7] + numeros[8] + numeros[9] + numeros[10];
             }
        }
    }
}
console.log(generatePhoneNumber([1, 9, 3, 9, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > Math.abs(lineB - lineC) && lineA < lineB + lineC) {
    return true;
  } else if (lineB > Math.abs(lineA - lineC) && lineB < lineA + lineC) {
    return true;
  } else if (lineC > Math.abs(lineB - lineA) && lineC < lineB + lineA) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let quantidade = 0;
  let contador = (/[1-9]/g);
  let arrayString  = string.match(contador);
  arrayString = arrayString.join("");
   for (let i = 0; i < arrayString.length; i += 1) {
     let numeros = Number(arrayString[i]);  
    quantidade = quantidade + numeros;
    } if (quantidade === 1) {
        return quantidade + " copo de água";
    } else {
       return quantidade + " copos de água";
      }
}
console.log(hydrate("5 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
