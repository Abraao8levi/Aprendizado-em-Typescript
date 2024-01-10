/*
Projeto  simples  jogo da forca em Typescript  */

const words: string[] = ["banana", "abacaxi", "manga", "laranja", "uva"];
const maxGuesses: number = 6;

function playHangman(): void {
  const word: string = words[Math.floor(Math.random() * words.length)];
  const guessedLetters: Set<string> = new Set<string>();
  let remainingGuesses: number = maxGuesses;

  console.log("Bem-vindo ao Jogo da Forca!");
  console.log(
    "Tente adivinhar a palavra. Cada traço '_' representa uma letra."
  );

  while (remainingGuesses > 0) {
    let displayWord: string = "";
    let incorrectGuesses: number = 0;

    for (let i = 0; i < word.length; i++) {
      const letter: string = word[i];
      if (guessedLetters.has(letter)) {
        displayWord += letter;
      } else {
        displayWord += "_";
        incorrectGuesses++;
      }
    }

    console.log(`Palavra: ${displayWord}`);
    console.log(`Tentativas restantes: ${remainingGuesses}`);

    if (incorrectGuesses === 0) {
      console.log("Parabéns, você ganhou!");
      return;
    }

    const guess: string | null = prompt("Digite uma letra:");
    if (guess === null) {
      return;
    } else if (guess.length !== 1 || !/[a-z]/i.test(guess)) {
      console.log("Por favor, digite apenas uma letra válida.");
    } else if (guessedLetters.has(guess)) {
      console.log("Você já tentou essa letra. Tente outra.");
    } else if (!word.includes(guess)) {
      console.log("Essa letra não está na palavra.");
      remainingGuesses--;
      guessedLetters.add(guess);
    } else {
      console.log("Boa! Essa letra está na palavra.");
      guessedLetters.add(guess);
    }
  }

  console.log(`Você perdeu. A palavra era "${word}".`);
}

playHangman();
