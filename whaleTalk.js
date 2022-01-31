let input = "Hello, I am Miller.";
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i);
  for (let x = 0; x < vowels.length; x++) {
    //console.log(i);
    if (input[i] == vowels[x]) {
      resultArray.push(input[i]);
    }
  }
  if (input[i] == 'e' || input[i] == 'u') {
    resultArray.push(input[i]);
  }
} 

console.log(resultArray.join('').toUpperCase());
