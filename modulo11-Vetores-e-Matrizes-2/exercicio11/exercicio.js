const numbers = [1,56,78,32,45];
const sum = numbers.reduce(function(accumulator,value){
  return accumulator + value
},0);

console.log(sum);