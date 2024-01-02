function iterativeFib(termCount) {
  if (termCount <= 0) return null;

  if (termCount === 1) return [0];

  if (termCount === 2) return [0, 1];

  const fibonacci = [0, 1];

  const memo = {};

  for (let i = 2; i < termCount; i += 1) {
    if (i in memo) {
      fibonacci.push(memo[i]);
    } else {
      const firstPrev = fibonacci[i - 2];
      const secondPrev = fibonacci[i - 1];
      const term = firstPrev + secondPrev;
      memo[i] = term;
      fibonacci.push(term);
    }
  }

  return fibonacci;
}

console.log(iterativeFib(8)); // [0, 1, 1, 2, 3, 5, 8, 13];

function recursiveFib(termCount) {
  if (termCount <= 0) return null;

  const memo = {};

  function recursiveFibHelper(term) {

    if (term in memo) {
      return memo[term];
    }

    if (term === 1) {
      return 0;
    }

    if (term === 2) {
      return 1;
    }

    memo[term] = recursiveFibHelper(term - 1) + recursiveFibHelper(term - 2)

    return memo[term];
  }

  const fibonacci = [];

  while (fibonacci.length < termCount) {
    fibonacci.push(recursiveFibHelper(fibonacci.length + 1));
  }
  return fibonacci;
}

console.log(recursiveFib(8));
