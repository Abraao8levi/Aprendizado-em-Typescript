/*
Este código usa um loop for para iterar de 1 a 200 e verifica se cada número é par ou ímpar. 
Os números pares são adicionados a uma matriz chamada evenNumbers, enquanto os números ímpares são adicionados a uma matriz chamada oddNumbers.

*/

function generateNumbers(): void {
  let evenNumbers: number[] = [];
  let oddNumbers: number[] = [];

  for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    } else {
      oddNumbers.push(i);
    }
  }

  console.log(`Números pares: ${evenNumbers.join(", ")}`);
  console.log(`Números ímpares: ${oddNumbers.join(", ")}`);
}

generateNumbers();
