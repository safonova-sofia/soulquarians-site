def factorial(n):
    factorial = 1
    multiply = 1
    for i in range(2, n + 1):
        factorial *= i
        multiply *= factorial
    return multiply


n = int(input())
print (factorial(n))
