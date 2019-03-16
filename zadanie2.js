function multiply (a = 0, b = 0) {
  const c = a * b;
  return c;
}

console.log(multiply(2));

const multiply2 = (a = 0, b = 0) => {return a * b};

console.log(multiply2(3,5));