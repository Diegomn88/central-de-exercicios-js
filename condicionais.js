// Nível Básico

// 1.  -Verificar se um número é positivo, negativo ou zero:

//     - Peça ao usuário para inserir um número.
//     - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// let numero = prompt("digite o numero:");

// if (numero > 0) {
//     console.log("Positivo.");
// } else
//     if (numero < 0) {
//         console.log("negativo.");
//     }
//     else {
//         console.log("É zero ");
//     }


// // 2.  -Verificar se um número é par ou ímpar:

// //     - Peça ao usuário para inserir um número.
// //     - Use o operador `%` para verificar se o número é divisível por 2.


// let number = prompt("digite o numero:");

// if (number % 2 == 0 ) {
//     console.log("Numero Par.");
// }

// else  {
//     console.log("Numero Impar.");
// }

// 3. **Classificação de idade:**
//     - Peça ao usuário para inserir sua idade.
//     - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).



let idade = prompt("digite sua idade:");

if (idade <= 12) {
    console.log("é criança.");
}

else if  (idade == 13 || idade == 17) {
    console.log("é Adolescente.");
}

else (idade > 18 );
console.log("é Adulto.");
