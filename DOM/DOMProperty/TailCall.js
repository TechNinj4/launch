

function factorial(n) {
    return function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }
}

console.log(factorial(5)) // 120