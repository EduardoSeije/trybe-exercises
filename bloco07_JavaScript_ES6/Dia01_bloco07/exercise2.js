const fatorial = () => {
  let numFatorial = 5;
  let resultado = numFatorial;
  let primeiroMult = numFatorial - 1;
  for (let index = primeiroMult; index > 1; index -= 1) {
    resultado *= index;
  }
}
fatorial();