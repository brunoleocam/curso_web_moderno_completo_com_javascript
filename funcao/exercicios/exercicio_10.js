// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisivelPor3(numero) {
    if (numero % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisivelPor3(3));
console.log(divisivelPor3(4));
console.log(divisivelPor3(5));
console.log(divisivelPor3(6));
console.log(divisivelPor3(7));