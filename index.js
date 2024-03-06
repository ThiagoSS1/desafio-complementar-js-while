
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion (query) {
  return new Promise(resolve => rl.question(query, ans => resolve(ans)))
}

async function main () {
  let total = 0;
  let count = 0;
  let continueLoop = true;

  while (continueLoop) {
    let value = await askQuestion('Insira um valor (ou "sair" para terminar): ');
    if (value.toLowerCase() === 'sair') {
      continueLoop = false;
    }
    else {
      total += parseInt(value);
      count++;
      console.log(`Soma: ${total}`);
      console.log(`Média: ${total / count}`);
    }
  }

  rl.close();
}

main();
