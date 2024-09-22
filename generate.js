function* generatePrimes(limit) {
    if (limit < 2) return; // No primes less than 2

    // Simple function to check if a number is prime
    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    }

    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num; // Yield the prime number
        }
    }
}

// Usage example
const limit = 50;
const primeGenerator = generatePrimes(limit);

for (let prime of primeGenerator) {
    console.log(prime); // Output each prime number
}
  
