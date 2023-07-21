export const calcular = [];

export const triangulo = (e) => {
  let value = parseInt(e.target.value);
  let a = 0;
  for (let i = 1; i <= value; i++) {
    a += i;
  }
  //console.log(a);
  return a;
};

export const fibo = (e) => {
  let value = parseInt(e.target.value);
  const sol = [0, 1];

  for (let i = 2; i <= value; i++) {
    sol[i] = sol[i - 1] + sol[i - 2];
  }
  //console.log(sol[value]);
  return sol[value];
};

export const primo = (e) => {
  let value = parseInt(e.target.value);
  let caja = [];
  for (let i = 2; parseInt(caja.length + 0) !== value; i++) {
    let esPrimo = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }

    if (esPrimo) {
      caja.push(i);
    }
  }
  //console.log(caja[value - 1]);
  return caja[value - 1];
};
