// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function triangleType(a, b, c) {
    if (a == b && b == c) {
        return 'Equilátero';
    } else if (a == b || b == c || a == c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

console.log(triangleType(1, 1, 1));
console.log(triangleType(1, 1, 2));
console.log(triangleType(1, 2, 3));
console.log(triangleType(3, 3, 3));
console.log(triangleType(1));
console.log(triangleType(1, 2));

