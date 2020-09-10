function sumPrimes(num) {
  let itr = 2;
  let sum = 0;
  let isPrime = currentItr => {
    let primeCheckItr = 2;
    while (primeCheckItr < currentItr) { // while (primeCheckItr*primeCheckItr <= currentItr) o(sqrt(n))
      if (currentItr % primeCheckItr === 0) return false;
      primeCheckItr++;
    }
    return true;
  }
  while (itr <= num) {
    if(isPrime(itr)) {
      sum += itr;
    }
    itr++;
  }
  return sum;
}

sumPrimes(10);
