function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`)
}

function isSubstring(searchString, subString) {
  let split = searchString.split(" ")

  for(let i = 0; i < split.length; i++) {
    if (split[i] === subString) {
      return true
    }
  }
  return false
}

// madLib("jeff", "bob", "joe")
// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))

function fizzBuzz(arr) {
  let tmp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      if (!(arr[i] % 3 === 0 && arr[i] % 5 === 0)) {
        tmp.push(arr[i])
      }
    }
  }
  return tmp;
}

// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))


function isPrime(num) {
  if (num === 2) {
    return true
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

// console.log(isPrime(2))
// console.log(isPrime(10))
// console.log(isPrime(15485863))
// console.log(isPrime(3548563))


function sumOfNPrimes(n) {
  let primes = []
  let count = 2

  while (primes.length < n) {
    if (isPrime(count)) {
      primes.push(count)
    }
    count += 1
  }

  console.log(primes)
  return primes.reduce((acc, el) => acc + el) 

}

console.log(sumOfNPrimes(1))