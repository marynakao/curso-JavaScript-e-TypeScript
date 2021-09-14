let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

tempA = 'A';
tempB = 'B';
tempC = 'C';

varA = tempB;
varB = tempC;
varC = tempA;

console.log(varA, varB, varC)

// Segunda forma

[varA, varB, varC] = [varB, varC, varA];
